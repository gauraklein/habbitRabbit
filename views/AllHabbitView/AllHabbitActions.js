export const ALL_HABBIT_VIEW = 'ALL_HABBIT_VIEW';
export const GET_HABBITS_FROM_API = 'GET_HABBITS_FROM_API'

export const handleAllHabbitView = () => {
    return (dispatch) => {
        dispatch({
            type: ALL_HABBIT_VIEW
        })
    }
}

export const getHabbitsFromApi = () => {
    console.log('hit get habbit call')
    return (dispatch) => {
        fetch("http://localhost:3000/user-habits", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //   .then(res => console.log(res, 'this is the api response'))
          .then((res) => {
            console.log(res, 'this is the res')  
            return    res.json()
        })
          .then(habbits => {
            console.log(habbits, 'from api call');
            dispatch({
              type: GET_HABBITS_FROM_API,
              payload: habbits
            });
          })
          .catch((err) => {
            console.log(err, 'this is the error')
          });
      };
}