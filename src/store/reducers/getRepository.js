import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  repository: null,
  loading: true,
}

const getRepositoryStart = (state, action) => {
  const updatedState = { loading: action.loading }

  return updateObject(state, updatedState)
}

const getRepositorySuccess = (state, action) => {
  const updatedState = { repository: action.repository, loading: action.loading }

  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_REPOSITORY_START: return getRepositoryStart(state, action)
    case actionTypes.GET_REPOSITORY_SUCCESS: return getRepositorySuccess(state, action)
    default:
      return state
  }
}

export default reducer