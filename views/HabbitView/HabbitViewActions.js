export const HABBIT_CHECKIN = 'HABBIT_CHECKIN';
export const ADD_HABBIT_VIEW = 'ADD_HABBIT_VIEW';

export const handleHabbitCheckin = (habbitId) => {
    console.log('habbit checkin function', habbitId)
    return (dispatch) => {
        dispatch({
            type: HABBIT_CHECKIN,
            payload: habbitId
        })
    }
}

export const handleAddHabbitView = () => {
    console.log('switching to Add Habbit View');
    return (dispatch) => {
        dispatch({
            type: ADD_HABBIT_VIEW
        })
    }
}
