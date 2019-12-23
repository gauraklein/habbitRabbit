import {HABBIT_CHECKIN} from "../../views/HabbitView/HabbitViewActions";


const initState = {
    test: 'testilkjlkng',
    habbit: 'C0d3',
    habbitDailyCount: 0
};

const rootReducer = (state = initState, action) => {

    console.log(action.type, '----- action type')

    switch (action.type) {
        case HABBIT_CHECKIN: {
            console.log('hit habbit check on reducer')
            state.habbitDailyCount++
            return {
                ...state
            }
        }
            break;

        default:
            console.log('hit reducer no action')

            return state;
    }
};


export default rootReducer;
