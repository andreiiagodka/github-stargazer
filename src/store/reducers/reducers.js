import { combineReducers } from 'redux';

import indexReducer from './index';
import newReducer from './new';

const rootReducer = combineReducers({
  index: indexReducer,
  new: newReducer
})

export default rootReducer