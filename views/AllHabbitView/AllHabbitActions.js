export const ALL_HABBIT_VIEW = 'ALL_HABBIT_VIEW'

export const handleAllHabbitView = () => {
    return (dispatch) => {
        dispatch({
            type: ALL_HABBIT_VIEW
        })
    }
}