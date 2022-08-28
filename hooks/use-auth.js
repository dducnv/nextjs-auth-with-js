import useSWR from "swr";
import { AuthApi } from "../api-config/authApi";
export function useAuth(option) {
    const { data: profile, error, mutate } = useSWR('/auth/me/info', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...option
    });

    const fistLoading = profile === undefined && error === undefined

    async function login(dataSend) {
        await AuthApi.login(dataSend);
        await mutate();
    }

    async function logout() {
        await AuthApi.logout();
        await mutate({}, false);
    }

    return {
        fistLoading,
        profile,
        error,
        login,
        logout
    }

}