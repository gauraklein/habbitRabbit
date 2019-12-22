import {combineReducers} from 'redux';
import test from './testReducer'
import {habbitView} from '../../views/HabbitView/HabbitViewReducer'

export default combineReducers({
    test,
    habbitView
});
