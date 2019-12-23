

 const habbitViewReducer = (state = {habbitDailyCount: 0}, action) => {
    switch (action.type) {
        case HABBIT_CHECKIN: {
            return {
                ...state,
                habbitDailyCount: habbitDailyCount + 1
            }
        }
            break;
        default:
            return state;
            break;
    }
};

export default habbitViewReducer;
