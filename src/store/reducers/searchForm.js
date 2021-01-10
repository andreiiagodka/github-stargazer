import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null
}

const searchStart = (state, action) => {
  return updateObject(state, { error: 'null, loading: true' })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_START: return searchStart(state, action)
    default:
      return state
  }
}

export default reducer