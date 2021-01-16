import * as actionTypes from './actionTypes';
import axios from 'axios';

import { firebase } from '../../config';

export const showRepository = id => {
  return dispatch => {
    dispatch(showRepositoryStart())
    firebase.database().ref('repositories/' + id).on('value', snapshot => {
      const repository = { id: id, ...snapshot.val() }

      dispatch(showRepositorySuccess(repository))
    })
  }
}

export const deleteRepository = id => {
  return dispatch => {
    firebase.database().ref('repositories/' + id).remove()
    
    dispatch(deleteRepositorySuccess())
  }
}

const showRepositoryStart = () => {
  return {
    type: actionTypes.SHOW_REPOSITORY_START,
    loading: true
  }
}

const showRepositorySuccess = repository => {
  return {
    type: actionTypes.SHOW_REPOSITORY_SUCCESS,
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