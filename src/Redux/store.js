import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thankMiddleware from "redux-thunk"
import {sortReducer} from "./Reducers/sortReducer";
import {productsReducer} from "./Reducers/productsReducer";
import {cartReducer} from "./Reducers/cartReducer";


let rootReducer = combineReducers({
    products: productsReducer,
    sort:sortReducer,
    cart:cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thankMiddleware)));


window._store_ = store

export default store