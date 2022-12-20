import * as categoryFilters from './category.types'

const initialState = {
    loading: false,
    error: false,
    errorMessage: '',
    filteredProducts: [],
    length: 0,
}

export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case categoryFilters.GET_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: payload.products,
                length: payload.length,
            }
        case categoryFilters.GET_FILTERED_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case categoryFilters.GET_FILTERED_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
            }
        case categoryFilters.GET_FILTERED_PRODUCTS_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}