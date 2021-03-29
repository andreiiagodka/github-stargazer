import { combineReducers } from 'redux'

import fetchRepositoriesReducer from './fetchRepositoriesReducer'
import fetchRepositoryReducer from './fetchRepositoryReducer'

const rootReducer = combineReducers({
  fetchRepositories: fetchRepositoriesReducer,
  fetchRepository: fetchRepositoryReducer
})

export default rootReducer