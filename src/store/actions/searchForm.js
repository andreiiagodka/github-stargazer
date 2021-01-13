import * as actionTypes from './actionTypes';
import axios from 'axios';

import { firebase } from '../../config';

export const searchRepository = event => {
  return dispatch => {
    event.preventDefault()

    const [owner, name] = event.target.elements.name.value.split('/')
    axios.get('https://api.github.com/repos/' + owner + '/' + name)
      .then(response => {
        dispatch(searchSuccess(owner, name, response.data.stargazers_count))
      })
      .catch(error => {
        dispatch(searchFail())
      })
  }
}

export const searchSuccess = (owner, name, stargazers_count) => {
  const newRepository = {
    owner: owner,
    name: name,
    stargazers_count: stargazers_count
  }
  firebase.database().ref('repositories').set(newRepository)

  return {
    type: actionTypes.SEARCH_SUCCESS,
    newRepository: newRepository 
  }
}

export const searchFail = () => {
  return {
    type: actionTypes.SEARCH_FAIL,
    error: 'Repository not found' 
  }
}