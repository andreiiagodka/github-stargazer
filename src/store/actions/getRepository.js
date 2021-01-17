import * as actionTypes from './actionTypes';

import { repositoryGet } from '../../firebase/firebase';

export const getRepository = id => {
  return dispatch => {
    repositoryGet(id).on('value', snapshot => {
      const repository = { id: id, ...snapshot.val() }

      dispatch(getRepositorySuccess(repository))
    })
  }
}

const getRepositorySuccess = repository => {
  return {
    type: actionTypes.GET_REPOSITORY_SUCCESS,
    repository: repository,
    loading: false
  }
}