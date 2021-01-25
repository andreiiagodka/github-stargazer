import { combineReducers } from 'redux'

import fetchRepositoriesReducer from './fetchRepositories'
import fetchRepositoryReducer from './fetchRepository'

const rootReducer = combineReducers({
  fetchRepositories: fetchRepositoriesReducer,
  fetchRepository: fetchRepositoryReducer
})

export default rootReducer