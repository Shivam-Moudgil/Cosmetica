import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { adminAuthReducer } from './admin_auth/admin.reducer';
import { admin_productsReducer } from './admin_products/admin_products.reducer';
import { categoryReducer } from './categories/category.reducer';


const rootReducer = combineReducers({
    // can add your reducers here
    admin_auth: adminAuthReducer,
    admin_products: admin_productsReducer,
    categoryFilter: categoryReducer
})

// If you dispatch any action using getStaticProps or getServerSideProps you need to update states in master reducer as well

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            categoryFilter: {
                ...state,
                filteredProducts: action.payload.products
            }
            // here you need to update state values again to persist data only if you dispatch any thing server side
        }
        return nextState;
    } else return rootReducer(state, action)
}


const initStore = () => {
    return legacy_createStore(masterReducer, composeWithDevTools(applyMiddleware(thunk)))
}

export const wrapper = createWrapper(initStore);
