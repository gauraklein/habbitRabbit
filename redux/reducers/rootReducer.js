import {HABBIT_CHECKIN, ADD_HABBIT_VIEW, UNHAPPY_RABBIT} from "../../views/HabbitView/HabbitViewActions";
import { TYPE_HABBIT, ADD_HABBIT, HABBIT_VIEW} from "../../views/AddHabbitView/AddHabbitActions";
import { ALL_HABBIT_VIEW } from '../../views/AllHabbitView/AllHabbitActions'

const initState = {
    test: 'testilkjlkng',
    habbit: 'habbit goes here',
    habbitDailyCount: 0,
    habbitInput: "",
    habbitToAdd: "",
    appView: "LoginView",
    habbitArray: [
       
    ],
    habbitToDisplayIndex: 0,
   
};

export const rootReducer = (state = initState, action) => {

    console.log(action.type, '----- action type')

    switch (action.type) {
        case HABBIT_CHECKIN: {
            console.log('hit habbit check on reducer', action.payload)
            state.habbitArray[action.payload].habbitDailyCount++
            state.habbitArray[action.payload].isRabbitHappy = true
            return {
                ...state,
                habbitDailyCount: Math.random(),
            }
        }
            break;

        case UNHAPPY_RABBIT: {
            console.log('making rabbit unhappy on reducer')
            state.habbitArray[action.payload].isRabbitHappy = false
            return {
                ...state,
                // habbitDailyCount: Math.random(),
            }

        }    

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
                appView: "HabbitView",
                habbitToDisplayIndex: action.payload
            }
        }
            break;

        case ALL_HABBIT_VIEW: {
            console.log('viewing all habbits from reducer')
            
            return {
                ...state,
                appView: 'AllHabbitView'
            }
        }    

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
                habbitArray: [...state.habbitArray, action.habbitToAdd],
                appView: 'AllHabbitView'
            }
        }

        default:
            console.log('hit reducer no action')

            return state;
    }
};


export default rootReducer;
