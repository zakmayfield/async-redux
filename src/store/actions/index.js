import axios from 'axios'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchApi = () => {
    return dispatch => {
        dispatch({ type: FETCH_START })

        axios.get(`https://aws.random.cat/meow`)
            .then(res => {
                setTimeout(() => {
                    dispatch({ type: FETCH_SUCCESS, payload: res.data.file })
                }, 500)
            })
            .catch(err => {
                dispatch({ type: FETCH_FAILURE, payload: "There was an error retrieving your cat photos"})
            })
    }
}