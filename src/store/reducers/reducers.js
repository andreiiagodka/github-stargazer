import { combineReducers } from 'redux';

import getRepositoriesReducer from './getRepositories';
import createRepositoryReducer from './createRepository';
import getRepositoryReducer from './getRepository';
import deleteRepositoryReducer from './deleteRepository';

const rootReducer = combineReducers({
  getRepositories: getRepositoriesReducer,
  createRepository: createRepositoryReducer,
  getRepository: getRepositoryReducer,
  deleteRepository: deleteRepositoryReducer
})

export default rootReducer