import * as adminAuthTypes from "./admin.types";
import axios from 'axios'

export const adminAuthLoading = () => ({ type: adminAuthTypes.ADMIN_AUTH_LOADING })
export const adminAuthSuccess = () => ({ type: adminAuthTypes.ADMIN_AUTH_SUCCESS })
export const adminAuthError = () => ({ type: adminAuthTypes.ADMIN_AUTH_ERROR })


export const adminLogin = (body) => async (dispatch) => {
    dispatch(adminAuthLoading())
    try {
        const { data } = await axios.post('/api/admin/login', body)
        dispatch({ type: adminAuthTypes.ADMIN_LOGIN, payload: data.authToken })

        dispatch(adminAuthSuccess())
    } catch (error) {
        console.log(error);
        dispatch(adminAuthError())
    }
}


export const adminLogout = () => async (dispatch) => {
    dispatch(adminAuthLoading())
    try {
        dispatch({ type: adminAuthTypes.ADMIN_LOGOUT })
        dispatch(adminAuthSuccess())
    } catch (error) {
        console.log(error);
        dispatch(adminAuthError())
    }
}