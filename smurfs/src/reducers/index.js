import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,

} from '../actions'

const initialState = {
  smurfs: [],
  isFetching: false,
  isAdding: false
}

const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_START:
      return {
        ...state,
        isFetching: true
      }
    case GET_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      }
    case GET_DATA_FAIL:
      return {
        ...state,
        isFetching: false
      }
    case ADD_SMURF_START:
      return {
        ...state,
        isAdding: true
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isAdding: false
      }
    case ADD_SMURF_FAIL:
      return {
        ...state,
        isAdding: false
      }
    default: return state
  }
}

export default smurfsReducer
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
