import {TEST_ACTION} from '../actions/testAction';

const test = (state = {}, action) => {
    switch (action.type) {
        case TEST_ACTION: {
            return {...state}
        }
        default:
            return state;
    }
};

export default test;
