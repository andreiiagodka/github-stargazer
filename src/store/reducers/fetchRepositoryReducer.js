import * as actionTypes from '../actionTypes'
import { updateObject } from '../utility'

const initialState = {
  repository: null,
  loading: true,
  error: false
}

const failOperation = state => {
  const updatedState = { ...initialState, loading: false, error: true }

  return updateObject(state, updatedState) 
}

const fetchRepositorySuccess = (state, action) => {
  const updatedState = { repository: action.repository, loading: false }

  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FAIL_OPERATION: return failOperation(state)
    case actionTypes.FETCH_REPOSITORY_SUCCESS: return fetchRepositorySuccess(state, action)
    default:
      return state
  }
}

export default reducer
