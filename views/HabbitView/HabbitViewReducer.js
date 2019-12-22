import {HABBIT_CHECKIN} from "./HabbitViewActions";

export const habbitView = (state = {habbitDailyCount: 0}, action) => {
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
