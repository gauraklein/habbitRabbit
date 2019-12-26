export const ADD_HABBIT = 'ADD_HABBIT';

export const handleAddHabbit = (habbitValue) => {
    console.log('adding habbit')

    return (dispatch) => {
        dispatch({
            type: ADD_HABBIT,
            payload: (habbitValue)
        })
    }
}
