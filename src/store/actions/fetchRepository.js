import * as actionTypes from './actionTypes'

const fetchRepository = id => ({
  type: actionTypes.FETCH_REPOSITORY,
  id: id
})

const fetchRepositorySuccess = repository => ({
  type: actionTypes.FETCH_REPOSITORY_SUCCESS,
  repository: repository
})

const fetchRepositoryFail = () => ({
  type: actionTypes.FETCH_REPOSITORY_FAIL
})

const actions = {
  fetchRepository,
  fetchRepositorySuccess,
  fetchRepositoryFail
} 

export { actions as default }