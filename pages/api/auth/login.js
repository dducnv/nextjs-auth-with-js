import httpProxy from "http-proxy";
import Cookies from 'cookies';

export const config = {
    api: {
        bodyParser: false
    }
}

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: "method not supported" })
    }
    return new Promise(resolve => {
        req.headers.cookie = '';
        const handleLoginRes = (proxyRes, req, res) => {
            let body = '';
            proxyRes.on('data', (chunk) => {
                body += chunk;
            })
            proxyRes.on('end', () => {
                try {
                    const { accessToken, expiresIn } = JSON.parse(body);
                    console.log("Data: ", { accessToken, expiresIn });
                    const cookies = new Cookies(req, res, {
                        secure: process.env.NODE_ENV !== 'development',
                    });
                    // save token to cookie
                    cookies.set('access_token', accessToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(expiresIn) //timestamp value
                    });
                    res.status(200).json({ message: 'login success' });
                } catch (err) {
                    console.log(err);
                    res.status(500).json({ message: 'somthing went wrong' });
                }
                resolve(true);
            })
        }
        proxy.once('proxyRes', handleLoginRes)
        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true
        })
    })
}
