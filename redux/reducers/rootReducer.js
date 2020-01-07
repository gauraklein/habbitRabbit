import {HABBIT_CHECKIN, ADD_HABBIT_VIEW, UNHAPPY_RABBIT} from "../../views/HabbitView/HabbitViewActions";
import { ALL_HABBIT_VIEW, GET_HABBITS_FROM_API} from '../../views/AllHabbitView/AllHabbitActions'
import { TYPE_HABBIT, ADD_HABBIT, HABBIT_VIEW, HABBIT_TOO_SHORT, HABBIT_SHORTNESS_ACKNOWLEDGED} from "../../views/AddHabbitView/AddHabbitActions";

const initState = {
    test: 'testilkjlkng',
    habbit: 'habbit goes here',
    habbitDailyCount: 0,
    habbitInput: "",
    habbitToAdd: "",
    appView: "LoginView",
    habbitArray: [
        {
            "habbit": "Code Daily",
            "habbitDailyCount": 65,
            "habbitId": 0,
            "isRabbitHappy": false,
            "completed": false
          },
          {
            "habbit": "Learn React Native",
            "habbitDailyCount": 44,
            "habbitId": 1,
            "isRabbitHappy": false,
            "completed": false
          }
    ],
    habbitToDisplayIndex: 0,
    habbitToShort: false
   
};

export const rootReducer = (state = initState, action) => {

    console.log(action.type, '----- action type')

    switch (action.type) {

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
                // appView: 'AllHabbitsAsync'
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

        case HABBIT_CHECKIN: {
            console.log('hit habbit check on reducer', action.payload)
            let habbitInFocus = state.habbitArray[action.payload]
            habbitInFocus.habbitDailyCount++
            habbitInFocus.isRabbitHappy = true
            if (habbitInFocus.habbitDailyCount === 66) {
                habbitInFocus.completed = true
            }
            return {
                ...state,
                habbitDailyCount: Math.random(),
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

            break;

        case GET_HABBITS_FROM_API: {
            console.log('getting habbits from api')
            return {
                ...state,
                habbitArray: action.payload
            }
        }
        
          break;
        
        case HABBIT_TOO_SHORT: {
            console.log('habbit too short at reducer');
            return {
                ...state,
                habbitTooShort: true
            }
        }    

            break;

        case HABBIT_SHORTNESS_ACKNOWLEDGED: {
            console.log('shortness acknowledged at reducer')
            return {
                ...state,
                habbitTooShort: false
            }
        }

        default:
            console.log('hit reducer no action')

            return state;
    }
};


export default rootReducer;
