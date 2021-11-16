import http from "../http-common"

interface AuthResponse {
    msg: string;
    token: string;
}
class AuthService {
    login(username: string, password: string){
        console.log("llamo a login");
        return http.post<AuthResponse>('auth/login', {username,password});
    }

    register(username: string, password: string){
        console.log("llamo a register")
        return http.post<AuthResponse>('auth/register',{username,password});
    }

    checkToken(token: string){
        return http.get('auth/token',{
            headers: {Authorization: `Bearer ${token}`}
        });
    }
}

export default new AuthService();