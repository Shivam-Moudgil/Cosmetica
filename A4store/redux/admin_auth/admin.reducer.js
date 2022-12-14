import * as adminAuthTypes from "./admin.types";
import cookie from 'js-cookie'


let authToken = cookie.get('authCookie') || '';

const initialState = {
    isAdmin: authToken ? true : false,
    authToken,
    loading: false,
    error: false,
    errorMessage: ''
}


export const adminAuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case adminAuthTypes.ADMIN_AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case adminAuthTypes.ADMIN_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
            }
        case adminAuthTypes.ADMIN_AUTH_ERROR:
            return {
                ...state,
                error: true,
            }
        case adminAuthTypes.ADMIN_LOGIN: {
            cookie.set('authCookie', payload)
            return {
                ...state,
                token: payload,
                isAdmin: true
            }
        }
        case adminAuthTypes.ADMIN_LOGOUT: {
            cookie.remove('authCookie')
            return {
                ...state,
                token: '',
                isAdmin: false
            }
        }
        default:
            return state;
    }
}