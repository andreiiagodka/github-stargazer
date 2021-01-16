import { combineReducers } from 'redux';

import indexReducer from './index';
import newReducer from './new';
import showReducer from './show';

const rootReducer = combineReducers({
  index: indexReducer,
  new: newReducer,
  show: showReducer
})

export default rootReducer