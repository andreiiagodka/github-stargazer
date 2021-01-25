import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  repository: null,
  loading: true,
  error: false
}

const fetchRepositoryStart = (state, action) => {
  const updatedState = { repository: null, loading: true, error: false }

  return updateObject(state, updatedState)
}

const fetchRepositorySuccess = (state, action) => {
  const updatedState = { repository: action.repository, loading: false }

  return updateObject(state, updatedState)
}

const fetchRepositoryFail = (state, action) => {
  const updatedState = { repository: null, loading: false, error: true }

  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_REPOSITORY_START: return fetchRepositoryStart(state, action)
    case actionTypes.FETCH_REPOSITORY_SUCCESS: return fetchRepositorySuccess(state, action)
    case actionTypes.FETCH_REPOSITORY_FAIL: return fetchRepositoryFail(state, action)
    default:
      return state
  }
}

export default reducer