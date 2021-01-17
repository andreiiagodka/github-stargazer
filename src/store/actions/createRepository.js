import * as actionTypes from './actionTypes'
import axios from 'axios'

import { repositoryCreate } from '../../firebase/firebase'

export const createRepository = name => {
  return dispatch => {
    dispatch(createRepositoryStart())
    axios.get('https://api.github.com/repos/' + name)
      .then(getResponse => {
        axios.get(getResponse.data.languages_url)
          .then(languagesResponse => {
            repositoryCreate(name, getResponse.data, languagesResponse.data)
            dispatch(createRepositorySuccess())
          })
          .catch(languagesError => {
            dispatch(createRepositoryFail())
          })
      })
      .catch(getError => {
        dispatch(createRepositoryFail())
      })
  }
}

const createRepositoryStart = () => {
  return {
    type: actionTypes.CREATE_REPOSITORY_START,
    loading: true
  }
}

const createRepositorySuccess = () => {
  return {
    type: actionTypes.CREATE_REPOSITORY_SUCCESS,
    loading: false,
    error: null,
    redirectTo: '/'
  }
}

const createRepositoryFail = () => {
  return {
    type: actionTypes.CREATE_REPOSITORY_FAIL,
    loading: false,
    error: 'Repository not found' 
  }
}