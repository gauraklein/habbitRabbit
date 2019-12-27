import {HABBIT_CHECKIN} from "../../views/HabbitView/HabbitViewActions";
import { TYPE_HABBIT, ADD_HABBIT} from "../../views/AddHabbitView/AddHabbitActions";

const initState = {
    test: 'testilkjlkng',
    habbit: 'habbit goes here',
    habbitDailyCount: 0,
    habbitInput: "",
    habbitToAdd: ""
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

        case TYPE_HABBIT: {
            console.log('Type habbit hit reducer');
            return {
                ...state,
                habbitToAdd: action.payload
            }
        }

            break;

        case ADD_HABBIT: {
            console.log('Add Habbit Hit reducer');
            return {
                ...state,
                habbit: state.habbitToAdd,

            }
        }

        default:
            console.log('hit reducer no action')

            return state;
    }
};


export default rootReducer;
