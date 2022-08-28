import Cookies from 'cookies';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: "method not supported" })
    }
    const cookies = new Cookies(req, res);
    cookies.set('access_token');
    res.status(200).json({ message: "logout success" })
}
