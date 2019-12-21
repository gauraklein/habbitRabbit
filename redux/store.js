import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from './reducers/rootReducer'

const initStore = () => createStore(rootReducer, {});

module.exports = {
    initStore
}
