import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  repositories: [],
  loading: false
}

const getRepositoriesStart = (state, action) => {
  const updatedState = { loading: action.loading }

  return updateObject(state, updatedState)
}

const getRepositoriesSuccess = (state, action) => {
  const updatedState = { repositories: action.repositories, loading: action.loading }

  return updateObject(state, updatedState) 
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_REPOSITORIES_START: return getRepositoriesStart(state, action)
    case actionTypes.GET_REPOSITORIES_SUCCESS: return getRepositoriesSuccess(state, action)
    default:
      return state
  }
}

export default reducer