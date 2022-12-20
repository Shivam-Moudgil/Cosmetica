import axios from 'axios'
import * as categoryFilters from './category.types'


export const loading = () => ({ type: categoryFilters.GET_FILTERED_PRODUCTS_LOADING })
export const success = () => ({ type: categoryFilters.GET_FILTERED_PRODUCTS_SUCCESS })
export const filterProductsError = (payload) => ({ type: categoryFilters.GET_FILTERED_PRODUCTS_ERROR, payload })


export const getAllFilteredProducts = ({ category, price, avgReview, typeOfSort }) => async (dispatch) => {
    try {
        dispatch(loading())
        const { data } = await axios(`/api/filterproducts/filter?category=${category}&${typeOfSort ? `typeOfSort=${typeOfSort}&` : ''}${price ? `price=${price}&` : ''}${avgReview ? `avgReview=${avgReview}&` : ''}`)
        dispatch({ type: categoryFilters.GET_FILTERED_PRODUCTS, payload: data })
        dispatch(success())
    } catch (error) {
        console.log(error);
        dispatch(filterProductsError())
    }
}

