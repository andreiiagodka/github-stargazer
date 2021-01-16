import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  repository: null,
  loading: false,
  deleted: false
}

const showRepositoryStart = (state, action) => {
  const updatedState = { loading: action.loading }

  return updateObject(state, updatedState)
}

const showRepositorySuccess = (state, action) => {
  const updatedState = { repository: action.repository, loading: action.loading }

  return updateObject(state, updatedState)
}

const deleteRepositorySuccess = (state, action) => {
  const updatedState = { deleted: action.deleted }

  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SHOW_REPOSITORY_START: return showRepositoryStart(state, action)
    case actionTypes.SHOW_REPOSITORY_SUCCESS: return showRepositorySuccess(state, action)
    case actionTypes.DELETE_REPOSITORY_SUCCESS: return deleteRepositorySuccess(state, action)
    default:
      return state
  }
}

export default reducer