import * as actionTypes from './actionTypes';
import axios from 'axios';

import { firebase } from '../../config';

export const searchRepository = name => {
  return dispatch => {
    axios.get('https://api.github.com/repos/' + name)
      .then(response => {
        dispatch(searchSuccess(name, response.data.stargazers_count))
      })
      .catch(error => {
        dispatch(searchFail())
      })
  }
}

export const searchSuccess = (name, stargazers_count) => {
  const newRepository = {
    name: name,
    stargazers_count: stargazers_count
  }
  firebase.database().ref('repositories').set(newRepository)

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