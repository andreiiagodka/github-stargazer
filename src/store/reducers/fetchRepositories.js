import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  repositories: [],
  loading: true,
  error: false
}

const fetchRepositoriesSuccess = (state, action) => {
  const updatedState = { repositories: action.repositories, loading: false, error: false }

  return updateObject(state, updatedState) 
}

const fetchRepositoriesFail = (state, action) => {
  const updatedState = { ...initialState, loading: false }

  return updateObject(state, updatedState) 
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_REPOSITORIES_SUCCESS: return fetchRepositoriesSuccess(state, action)
    case actionTypes.FETCH_REPOSITORIES_FAIL: return fetchRepositoriesFail(state, action)
    default:
      return state
  }
}

export default reducer