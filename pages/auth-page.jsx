import React from 'react';
import { useRouter } from 'next/router';
import AuthLayout from '../components/Layout/AuthLayout';
import { useAuth } from '../hooks/use-auth';

const AuthPage = () => {
    const router = useRouter();
    const { logout } = useAuth()
    async function handleLogout() {
        try {
            await logout()
            router.push('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <AuthLayout>
            <div>AuthPage</div>
            <button onClick={handleLogout}>logout</button>
        </AuthLayout>

    )
}

export default AuthPage