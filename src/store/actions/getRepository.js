import * as actionTypes from './actionTypes'

import axios from 'axios'

import { findRepository } from '../../firebase/firebase';

export const getRepository = id => {
  return dispatch => {
    findRepository(id).on('value', snapshot => {
      if (!snapshot.val()) {
        return
      }

      axios.get('https://api.github.com/repos/' + snapshot.val().full_name + '/languages')
      .then(response => {
        const repository = { 
          id: id,
          languages: response.data,
          ...snapshot.val() 
        }
        
        dispatch(getRepositorySuccess(repository))
      })
      .catch(error => console.log(error))
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