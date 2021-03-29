import * as actionTypes from '../actionTypes'
import { updateObject } from '../utility'

const initialState = {
  repositories: [],
  loading: true,
  error: false
}

const startOperation = state => {
  return updateObject(state, initialState)
}

const failOperation = state => {
  const updatedState = { ...initialState, loading: false, error: true }

  return updateObject(state, updatedState) 
}

const fetchRepositoriesSuccess = (state, action) => {
  const updatedState = { repositories: action.repositories, loading: false }

  return updateObject(state, updatedState) 
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.START_OPERATION: return startOperation(state)
    case actionTypes.FAIL_OPERATION: return failOperation(state)
    case actionTypes.FETCH_REPOSITORIES_SUCCESS: return fetchRepositoriesSuccess(state, action)
    default:
      return state
  }
}

export default reducer