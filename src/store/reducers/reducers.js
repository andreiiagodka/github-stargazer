import { combineReducers } from 'redux';

import getRepositoriesReducer from './getRepositories';
import getRepositoryReducer from './getRepository';

const rootReducer = combineReducers({
  getRepositories: getRepositoriesReducer,
  getRepository: getRepositoryReducer
})

export default rootReducer