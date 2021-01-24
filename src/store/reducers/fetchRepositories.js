import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  repositories: [],
  loading: false
}

const fetchRepositoriesStart = (state, action) => {
  const updatedState = { loading: true }

  return updateObject(state, updatedState)
}

const fetchRepositoriesSuccess = (state, action) => {
  const updatedState = { repositories: action.repositories, loading: false }

  return updateObject(state, updatedState) 
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_REPOSITORIES_START: return fetchRepositoriesStart(state, action)
    case actionTypes.FETCH_REPOSITORIES_SUCCESS: return fetchRepositoriesSuccess(state, action)
    default:
      return state
  }
}

export default reducer