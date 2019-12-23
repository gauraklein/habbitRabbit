export const HABBIT_CHECKIN = 'HABBIT_CHECKIN';

export const handleHabbitCheckin = () => {
    console.log('habbit checkin function')
    return (dispatch) => {
        dispatch({
            type: HABBIT_CHECKIN
        })
    }
}
