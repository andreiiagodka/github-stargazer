import * as actionTypes from './actionTypes';

import { firebase } from '../../config';

export const fetchRepositories = () => {
  return dispatch => {
    dispatch(fetchRepositoriesStart())
    firebase.database().ref('repositories').on('value', snapshot => {
      const repositories = snapshot.val()
      const fetchedRepositories = []
      for (let id in repositories) {
        fetchedRepositories.push({
          id: id,
          ...repositories[id]
        })
      }
      dispatch(fetchRepositoriesSuccess(fetchedRepositories))
    })
  }
}

export const fetchRepositoriesStart = () => {
  return {
    type: actionTypes.FETCH_REPOSITORIES_START,
    loading: true
  }
}

export const fetchRepositoriesSuccess = (repositories) => {
  return {
    type: actionTypes.FETCH_REPOSITORIES_SUCCESS,
    repositories: repositories,
    loading: false
  }
}