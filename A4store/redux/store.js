import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({
    // can add your reducers here
})

// If you dispatch any action using getStaticProps or getServerSideProps you need to update states in master reducer as well 

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextstate = {
            ...state,
            // here you need to update state values again to persist data only if you dispatch any thing server side
        }
        return nextstate;
    } else return combineReducers(state, action)
}


const initStore = () => {
    return legacy_createStore(masterReducer, composeWithDevTools(applyMiddleware(thunk)))
}

export const wrapper = createWrapper(initStore);
