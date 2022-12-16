import { GET_ONE_PRODUCT } from "./admin_products.types";


const initialState = {
    singleProduct: {},
}

export const admin_productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ONE_PRODUCT:
            return {
                ...state,
                singleProduct: payload
            }

        default:
            return state;
    }
}