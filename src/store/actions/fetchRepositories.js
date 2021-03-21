import * as actionTypes from './actionTypes'

const fetchRepositories = () => ({
  type: actionTypes.FETCH_REPOSITORIES
})

const fetchRepositoriesSuccess = (repositories) => ({
  type: actionTypes.FETCH_REPOSITORIES_SUCCESS,
  repositories: repositories
})

const fetchRepositoriesFail = () => ({
  type: actionTypes.FETCH_REPOSITORIES_FAIL
})

const actions = {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesFail
} 

export { actions as default }