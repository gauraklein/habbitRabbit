import {HABBIT_CHECKIN, ADD_HABBIT_VIEW} from "../../views/HabbitView/HabbitViewActions";
import { TYPE_HABBIT, ADD_HABBIT, HABBIT_VIEW} from "../../views/AddHabbitView/AddHabbitActions";

const initState = {
    test: 'testilkjlkng',
    habbit: 'habbit goes here',
    habbitDailyCount: 0,
    habbitInput: "",
    habbitToAdd: "",
    appView: "HabbitView",
    habbitArray: [
        {
            habbit: "Test",
            habbitId: 0,
            habbitDailyCount: 0
        },
        {
            habbit:"test for second",
            habbitId: 1,
            habbitDailyCount: 0
        }
    ]
};

const rootReducer = (state = initState, action) => {

    console.log(action.type, '----- action type')

    switch (action.type) {
        case HABBIT_CHECKIN: {
            console.log('hit habbit check on reducer', action.payload)
            state.habbitArray[action.payload].habbitDailyCount++
            return {
                ...state,
                habbitDailyCount: Math.random()
            }
        }
            break;

        case ADD_HABBIT_VIEW: {
            console.log('Add habbit view hit reducer')
            return {
                ...state,
                appView: "AddHabbitView"
            }
        }
            break;

        case HABBIT_VIEW: {
            console.log('Habbit View hit reducer');
            return {
                ...state,
                appView: "HabbitView"
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
                appView: 'HabbitView'
            }
        }

        default:
            console.log('hit reducer no action')

            return state;
    }
};


export default rootReducer;
