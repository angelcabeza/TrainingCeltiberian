import AuthService from '../services/auth.service'
import { Dispatch } from 'redux';
import { AuthTypes, AuthAction } from './types'

export interface AuthState {
    username: string,
    msg: string,
    token: string,
    isAuth: boolean,
    error: boolean
}

export const login = (username: string, password: string) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        const res = await AuthService.login(username,password);

        dispatch({
            type: AuthTypes.LOGIN_SUCCESS,
            payload: {username, token: res.data.token}
        });

        localStorage.setItem('token', res.data.token);
    } catch (e: any){
        dispatch({
            type: AuthTypes.LOGIN_ERROR,
            payload: e.response.data.msg
        });
    }
}

export const register = (username: string, password: string) => async (dispatch: Dispatch<AuthAction>) => {
    try{
        await AuthService.register(username,password);

        dispatch({
            type: AuthTypes.REGISTER_SUCCESS,
            payload: "Usuario registrado con éxito"
        })
    } catch (e: any){
        dispatch({
            type: AuthTypes.REGISTER_ERROR,
            payload: e.response.data.msg
        })
    }
}

/*export const checkPersistedToken = () => async (dispatch: Dispatch<AuthAction>) => {
    const token = localStorage.getItem('token');

    if (token != null){
        try{
            const res = await AuthService.checkToken(token);
            dispatch({
                type: AuthTypes.LOGIN_SUCCESS,
                payload: { username: res.data.username, token}
            });
        }  catch (e: any) {
            localStorage.removeItem('token');
        }
    }
};*/