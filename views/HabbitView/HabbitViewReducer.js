import {HABBIT_CHECKIN} from "./HabbitViewActions";

export const habbitView = (state = {}, action) => {
    switch (action.type) {
        case HABBIT_CHECKIN: {
            return {
                ...state,
                habbitDailyCount: habbitDailyCount++
            }
        }
            break;
        default:
            return state;
            break;
    }


}
