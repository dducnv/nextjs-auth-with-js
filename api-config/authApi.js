import apiConfig from './axiosConfig';

export const AuthApi = {
    register(data) {
        let dataSend = JSON.stringify({
            "name": data.name,
            "email": data.email,
            "phone": data.phone,
            "password": data.password,
            "passwordConfirm": data.passwordConfirm
        })

        return apiConfig.post('/auth/register', dataSend);
    },
    login(data) {
        let dataSend = JSON.stringify({
            "email": data.email,
            "password": data.password
        });

        return apiConfig.post('/auth/login', dataSend)
    },
    logout() {
        return apiConfig.post('/auth/logout')
    }
}