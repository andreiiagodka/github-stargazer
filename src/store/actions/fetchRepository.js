import * as actionTypes from './actionTypes'

import { findRepository } from '../../shared/firebase'

export const fetchRepository = id => {
  return dispatch => {
    dispatch( fetchRepositoryStart() )

    findRepository(id).on('value', snapshot => {
      if ( snapshot.val() ) {
        const repository = { id: id, ...snapshot.val() }

        dispatch( fetchRepositorySuccess(repository) )
      } else {
        dispatch( fetchRepositoryFail() )
      }
    })
  }
}

const fetchRepositoryStart = () => {	
  return {	
    type: actionTypes.FETCH_REPOSITORY_START	
  }	
}

const fetchRepositorySuccess = repository => {
  return {
    type: actionTypes.FETCH_REPOSITORY_SUCCESS,
    repository: repository
  }
}

const fetchRepositoryFail = () => {
  return { 
    type: actionTypes.FETCH_REPOSITORY_FAIL
  }
}