**I. Get started**
1. Clone code
```command
git clone https://github.com/dducnv/nextjs-auth-with-js.git
```
2. Install package
```npm install```
3. Run
```npm run dev```

**II. Project Structure**
```
📦 
├─ api-config
│  ├─ authApi.js
│  └─ axiosConfig.js
├─ components
│  ├─ Layout
│  │  ├─ AdminLayout.jsx
│  │  ├─ AuthLayout.jsx
│  │  └─ BlankLayout.jsx
│  └─ Navbar.jsx
├─ hooks
│  └─ use-auth.js
├─ pages
│  ├─ _app.jsx
│  ├─ admin-page.jsx
│  ├─ api
│  │  ├─ [...path].js
│  │  ├─ auth
│  │  │  ├─ login.js
│  │  │  └─ logout.js
│  │  └─ test-cookies.js
│  ├─ auth-page.jsx
│  └─ index.jsx
├─ public
│  ├─ favicon.ico
│  └─ vercel.svg
└─ styles
   ├─ Home.module.css
   └─ globals.css
├─ next.config.js
├─ package-lock.json
├─ package.json
```
**III. configuration**

 ***Config .env***
```js
//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: "base api url"
  }
}
module.exports = nextConfig
```







