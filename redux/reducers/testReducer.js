import {TEST_ACTION} from '../actions/testAction';

const test = (state = {}, action) => {
    switch (action.type) {
        case TEST_ACTION: {
            console.log('hit reducer')
            state.habbitDailyCount++
            return state
        }
        break;

        default:
            console.log('hit reducer no action')

            return state;
    }
};

export default test;
