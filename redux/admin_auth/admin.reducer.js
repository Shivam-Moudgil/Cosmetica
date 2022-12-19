
import * as adminAuthTypes from "./admin.types";

function getLSData() {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem('new item')
    }
}



const initialState = {
    isAdmin: '',
    authToken: '',
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
            return {
                ...state,
                token: '',
                isAdmin: false
            }
        }
        case adminAuthTypes.ADMIN_LOGOUT: {
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