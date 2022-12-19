import { GET_ONE_PRODUCT, GET_SINGLE_PURCHASED_ITEM } from "./admin_products.types";


const initialState = {
    singleProduct: {},
    singlePurchasedItem: {}
}

export const admin_productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ONE_PRODUCT:
            return {
                ...state,
                singleProduct: payload
            }
        case GET_SINGLE_PURCHASED_ITEM:
            return {
                ...state,
                singlePurchasedItem: payload
            }
        default:
            return state;
    }
}