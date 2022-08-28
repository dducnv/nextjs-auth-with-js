import Cookies from 'cookies';

export default function handler(req, res) {
    const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
    cookies.set("122","Haha");
    res.status(200).json({ message: "logout success" })
}
