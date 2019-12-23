import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from './reducers/rootReducer'
import thunk from "redux-thunk";
import habbitViewReducer from "../views/HabbitView/HabbitViewReducer";

const composedEnhancer = compose( applyMiddleware(thunk));

// const initialState = {
//     test: 'testing',
//     habbitViewReducer: habbitViewReducer
//     // habbitDailyCount: 0
// };

const initStore = () => createStore(rootReducer,
    composedEnhancer);

module.exports = {
    initStore
};
