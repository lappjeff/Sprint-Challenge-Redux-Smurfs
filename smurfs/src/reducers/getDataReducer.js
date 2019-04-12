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
    default: return state
  }
}
