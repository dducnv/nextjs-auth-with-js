import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../../hooks/use-auth';

const AuthLayout = ({ children }) => {
    const router = useRouter();
    const { profile, fistLoading } = useAuth();
    useEffect(() => {
        if (!fistLoading && !profile) router.push('/')
      }, [router, profile, fistLoading])
      if (!profile) return <p>Loading</p>
    return (
        <>{children}</>
    )
}

export default AuthLayout