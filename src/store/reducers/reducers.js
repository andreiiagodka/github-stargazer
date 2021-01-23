import { combineReducers } from 'redux';

import getRepositoriesReducer from './getRepositories';
import getRepositoryReducer from './getRepository';
import deleteRepositoryReducer from './deleteRepository';

const rootReducer = combineReducers({
  getRepositories: getRepositoriesReducer,
  getRepository: getRepositoryReducer,
  deleteRepository: deleteRepositoryReducer
})

export default rootReducer