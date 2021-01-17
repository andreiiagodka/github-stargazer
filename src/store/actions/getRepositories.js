import * as actionTypes from './actionTypes';

import { repositoriesGet } from '../../firebase/firebase';

export const getRepositories = () => {
  return dispatch => {
    dispatch(getRepositoriesStart())

    repositoriesGet().on('value', snapshot => {
      const repositories = snapshot.val()
      const fetchedRepositories = []
      for (let id in repositories) {
        fetchedRepositories.push({
          id: id,
          ...repositories[id]
        })
      }

      dispatch(getRepositoriesSuccess(fetchedRepositories))
    })
  }
}

export const getRepositoriesStart = () => {
  return {
    type: actionTypes.GET_REPOSITORIES_START,
    loading: true
  }
}

export const getRepositoriesSuccess = (repositories) => {
  return {
    type: actionTypes.GET_REPOSITORIES_SUCCESS,
    repositories: repositories,
    loading: false
  }
}