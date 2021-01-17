import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  redirectTo: null
}

const deleteRepositorySuccess = (state, action) => {
  const updatedState = { redirectTo: action.redirectTo }

  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.DELETE_REPOSITORY_SUCCESS: return deleteRepositorySuccess(state, action)
    default:
      return state
  }
}

export default reducer