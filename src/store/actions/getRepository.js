import * as actionTypes from './actionTypes';
import axios from 'axios';

import { repositoryGet } from '../../firebase/firebase';

export const getRepository = id => {
  return dispatch => {
    repositoryGet(id).on('value', snapshot => {
      const repository = { id: id, ...snapshot.val() }

      dispatch(getRepositorySuccess(repository))
    })
  }
}

export const deleteRepository = id => {
  return dispatch => {
    firebase.database().ref('repositories/' + id).remove()
    
    dispatch(deleteRepositorySuccess())
  }
}

const getRepositorySuccess = repository => {
  return {
    type: actionTypes.GET_REPOSITORY_SUCCESS,
    repository: repository,
    loading: false
  }
}

const deleteRepositorySuccess = () => {
  return {
    type: actionTypes.DELETE_REPOSITORY_SUCCESS,
    deleted: true
  }
}