import { combineReducers } from 'redux';

import newReducer from './new';

const rootReducer = combineReducers({
  new: newReducer
})

export default rootReducer