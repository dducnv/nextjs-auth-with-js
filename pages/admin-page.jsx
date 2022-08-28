import React from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '../components/Layout/AdminLayout';

const AdminPage = () => {
    const router = useRouter()
    return (
        <AdminLayout>
            <div>AdminPage</div>
            <button>logout</button>
        </AdminLayout>
    )
}

export default AdminPage