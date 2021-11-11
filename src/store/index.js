import { createStore } from 'redux';
import { combineReducers,applyMiddleware } from 'redux';
import CartReducer from './reducers/cart';
import ProductReducer from './reducers/products';
import thunk from 'redux-thunk'
var reducer = combineReducers({CartReducer,ProductReducer})

var store = new createStore(reducer, applyMiddleware(thunk))
export default store;