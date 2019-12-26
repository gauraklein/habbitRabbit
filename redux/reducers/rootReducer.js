import {HABBIT_CHECKIN} from "../../views/HabbitView/HabbitViewActions";
import { ADD_HABBIT} from "../../views/AddHabbitView/AddHabbitActions";

const initState = {
    test: 'testilkjlkng',
    habbit: 'habbit goes here',
    habbitDailyCount: 0,
    habbitInput: ""
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

        case ADD_HABBIT: {
            console.log('Add habbit hit reducer');
            return {
                ...state,
                habbit: action.payload
            }
        }

        default:
            console.log('hit reducer no action')

            return state;
    }
};


export default rootReducer;
