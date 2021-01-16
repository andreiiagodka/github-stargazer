import * as actionTypes from './actionTypes';
import axios from 'axios';

import { firebase } from '../../config';

export const searchRepository = name => {
  return dispatch => {
    axios.get('https://api.github.com/repos/' + name)
      .then(getResponse => {
        axios.get('https://api.github.com/repos/' + name + '/languages')
        .then(languagesResponse => {
          const newRepository = {
            name: name,
            stats: {
              watchers: getResponse.data.watchers_count,
              stars: getResponse.data.stargazers_count,
              forks: getResponse.data.forks_count,
            },
            languages: languagesResponse.data
          }
          firebase.database().ref('repositories').push().set(newRepository)

          dispatch(searchSuccess())
        })
        .catch(languagesError => {
          dispatch(searchFail())
        })
      })
      .catch(getError => {
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