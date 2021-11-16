import {AuthAction, AuthTypes } from '../actions/types'
import { AuthState } from '../actions/authActions'
import { Reducer } from 'redux'

const initialState: AuthState = {
    token: '',
    username: '',
    msg: '',
    isAuth: false,
    error: false
};

const authReducer : Reducer<AuthState,AuthAction> = (state:AuthState = initialState, action: AuthAction)  => {
    switch(action.type){
        case AuthTypes.LOGIN_SUCCESS:
            console.log("LOGIN SUCCESS");
            return {
                ...state,
                token: action.payload.token,
                username: action.payload.username,
                msg: 'Sesion iniciada',
                isAuth: true
            };
        
        case AuthTypes.REGISTER_SUCCESS:
            return{
                ...state,
                msg: action.payload
            };
        
        case AuthTypes.LOGIN_ERROR:
            return{
                ...state,
                msg: action.payload,
                error: true
            }

        case AuthTypes.REGISTER_ERROR:
            return {
                ...state,
                msg: action.payload,
                error: true
            }
        
        case AuthTypes.LOGIN_LOADING:
            return{
                ...state,
                msg: 'Loading..'
            }
        
        default:
            return state;
    }
};

export default authReducer;