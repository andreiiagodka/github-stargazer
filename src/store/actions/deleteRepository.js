import * as actionTypes from './actionTypes';

import { repositoryDelete } from '../../firebase/firebase';

export const deleteRepository = id => {
  return dispatch => {
    repositoryDelete(id)

    dispatch(deleteRepositorySuccess())
  }
}

const deleteRepositorySuccess = () => {
  return {
    type: actionTypes.DELETE_REPOSITORY_SUCCESS,
    redirectTo: '/'
  }
}