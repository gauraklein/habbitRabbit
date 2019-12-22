import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from './reducers/rootReducer'
import thunk from "redux-thunk";

const composedEnhancer = compose( applyMiddleware(thunk));

const initialState = {
    test: 'test',
    habbit: 'Code',
    habbitDailyCount: 0
}

const initStore = () => createStore(rootReducer, {} = initialState,
    composedEnhancer);

module.exports = {
    initStore
};
