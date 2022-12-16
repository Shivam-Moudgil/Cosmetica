import axios from "axios";
import cookie from 'js-cookie'
import * as admin_products_Types from './admin_products.types'




export const getSingleProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/admin/products/${id}`, {
            headers: {
                authToken: cookie.get('authCookie')
            }
        })
        dispatch({ type: admin_products_Types.GET_ONE_PRODUCT, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const editSingleProduct = (id, body) => async (dispatch) => {
    try {
        await axios.patch(`/api/admin/products/${id}`, body, {
            headers: {
                authToken: cookie.get('authCookie')
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const addNewProduct = (body) => async (dispatch) => {
    try {
        let { data } = await axios.post(`/api/admin/products/add-new-product`, body, {
            headers: {
                authToken: cookie.get('authCookie')
            }
        })
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const deleteSingleProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/admin/products/${id}`, {
            headers: {
                authToken: cookie.get('authCookie')
            }
        })
        dispatch()
    } catch (error) {
        console.log(error);
    }
}