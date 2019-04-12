import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL

} from '../actions'

const initialState = {
  smurfs: [],
  isFetching: false
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
