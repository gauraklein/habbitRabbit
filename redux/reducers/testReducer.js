import {TEST_ACTION} from '../actions/testAction';

const test = (state = {}, action) => {
    switch (action.type) {
        case TEST_ACTION: {
            return action.payload;
        }
        default:
            return state;
    }
};

export default test;
