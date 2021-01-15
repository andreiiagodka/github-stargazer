import * as actionTypes from './actionTypes';
import axios from 'axios';

import { firebase } from '../../config';

export const searchRepository = name => {
  return dispatch => {
    axios.get('https://api.github.com/repos/' + name)
      .then(response => {
        const newRepository = {
          name: name,
          stargazers_count: response.data.stargazers_count
        }
        firebase.database().ref('repositories').push().set(newRepository)
        
        dispatch(searchSuccess())
      })
      .catch(error => {
        dispatch(searchFail())
      })
  }
}

export const searchSuccess = () => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    success: true
  }
}

export const searchFail = () => {
  return {
    type: actionTypes.SEARCH_FAIL,
    error: 'Repository not found' 
  }
}