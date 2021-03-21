import * as actionTypes from './actionTypes'

export const startOperation = () => ({
  type: actionTypes.START_OPERATION
})

export const failOperation = () => ({
  type: actionTypes.FAIL_OPERATION
})

export const createRepository = payload => ({
  type: actionTypes.CREATE_REPOSITORY,
  payload
})

export const deleteRepository = payload => ({
  type: actionTypes.DELETE_REPOSITORY,
  payload
})

export const fetchRepositories = () => ({
  type: actionTypes.FETCH_REPOSITORIES
})

export const fetchRepositoriesSuccess = (repositories) => ({
  type: actionTypes.FETCH_REPOSITORIES_SUCCESS,
  repositories: repositories
})

export const fetchRepository = id => ({
  type: actionTypes.FETCH_REPOSITORY,
  id: id
})

export const fetchRepositorySuccess = repository => ({
  type: actionTypes.FETCH_REPOSITORY_SUCCESS,
  repository: repository
})
 