import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL

} from '../actions'

const initialState = {
  smurfs: [],
  isFetching: false
}

export const getDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_START:
      return {
        ...state,
        isFetching: true
      }
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: action.payload
      }
    case GET_DATA_FAIL:
      return {
        ...state,
        isFetching: false
      }
    default: return state
  }
}
