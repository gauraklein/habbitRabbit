export const TYPE_HABBIT = 'TYPE_HABBIT';
export const ADD_HABBIT = 'ADD_HABBIT'

export const handleTypeHabbit = (habbitValue) => {
    console.log('adding habbit')

    return (dispatch) => {
        dispatch({
            type: TYPE_HABBIT,
            payload: (habbitValue)
        })
    }
};

export const handleAddHabbit = () => {
    return (dispatch)   => {
        dispatch({
            type: ADD_HABBIT
        })
    }
}
