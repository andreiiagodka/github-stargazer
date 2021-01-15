import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null
}

const searchFail = (state, action) => {
  const updatedState = { error: action.error }

  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FAIL: return searchFail(state, action)
    default:
      return state
  }
}

export default reducer