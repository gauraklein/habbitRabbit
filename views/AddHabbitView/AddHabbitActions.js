export const TYPE_HABBIT = 'TYPE_HABBIT';
export const ADD_HABBIT = 'ADD_HABBIT'
export const HABBIT_VIEW = 'HABBIT_VIEW'
export const HABBIT_TOO_SHORT = 'HABBIT_TOO_SHORT'
export const HABBIT_SHORTNESS_ACKNOWLEDGED = 'HABBIT_SHORTNESS_ACKNOWLEDGED'

export const handleTypeHabbit = (habbitValue) => {
    console.log('adding habbit')

    return (dispatch) => {
        dispatch({
            type: TYPE_HABBIT,
            payload: (habbitValue)
        })
    }
};

export const handleAddHabbit = (habbitToAdd, habbitArrayLength) => {

    let habbitToAddObject = {
        habbit: habbitToAdd,
        habbitDailyCount: 0,
        habbitId: habbitArrayLength,
        isRabbitHappy: false
    }

    if (habbitToAddObject.habbit.length < 3) {
        return (dispatch) => {
            dispatch({
                type: HABBIT_TOO_SHORT
            })
        }
    }
    return (dispatch)   => {
        dispatch({
            type: ADD_HABBIT,
            habbitToAdd: habbitToAddObject
        })
    }
};

export const handleHabbitView = (habbitId) => {
    console.log(habbitId, 'this is the habbitID for switching views')
    return (dispatch) => {
        dispatch({
            type: HABBIT_VIEW,
            payload: habbitId
        })
    }
}

export const habbitTooShortAknowledgement = () => {
    console.log('user now knows habbit is too short, congratulations')
    return (dispatch) => {
        dispatch({
            type: HABBIT_SHORTNESS_ACKNOWLEDGED
        })
    }
}