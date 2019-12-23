export const TEST_ACTION = 'TEST_ACTION_PRESS';

export const testFunction = () => {
    alert('TEST FUNCTION')
    console.log('testFunction')
    return (dispatch) => {
        dispatch({
            type: 'TEST_ACTION_PRESS'
        })
    }
};
