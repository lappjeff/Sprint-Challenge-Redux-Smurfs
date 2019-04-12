import axios from 'axios'

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL'

export const addSmurf = data => dispatch => {
  dispatch({ type: ADD_SMURF_START })

  return axios
    .post('http://localhost:3333/smurfs', data)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: data })
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAIL, payload: err})
    })
}
