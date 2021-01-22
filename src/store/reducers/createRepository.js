import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: false,
  error: null,
  redirectTo: null
}

const createRepositoryStart = (state, action) => {
  const updatedState = { error: action.error }

  return updateObject(state, updatedState)
}

const createRepositorySuccess = (state, action) => {
  // const updatedState = { 
  // }

  // return updateObject(state, updatedState) 
}

const createRepositoryFail = (state, action) => {
  const updatedState = { error: action.error }

  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CREATE_REPOSITORY_START: return createRepositoryStart(state, action)
    case actionTypes.CREATE_REPOSITORY_SUCCESS: return createRepositorySuccess(state, action)
    case actionTypes.CREATE_REPOSITORY_FAIL: return createRepositoryFail(state, action)
    default:
      return state
  }
}

export default reducer