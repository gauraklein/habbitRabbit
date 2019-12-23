import {TEST_ACTION} from "../actions/testAction";
import {HABBIT_CHECKIN} from "../../views/HabbitView/HabbitViewActions";


const initState = {
    test: 'testilkjlkng',
    habbit: 'C0d3',
    habbitDailyCount: 0
}

const rootReducer = (state = initState, action) => {

    console.log(action.type, '----- action type')

    switch (action.type) {
        case HABBIT_CHECKIN: {
            return {
                ...state,
                habbitDailyCount: habbitDailyCount + 1
            }
        }
            break;
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


export default rootReducer;
