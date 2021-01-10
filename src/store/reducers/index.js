import { combineReducers } from 'redux';

import searchFormReducer from './searchForm';

const rootReducer = combineReducers({
  searchForm: searchFormReducer
})

export default rootReducer