import * as actionTypes from './actionTypes'
import axios from 'axios'

import { repositoryCreate } from '../../firebase/firebase'

export const createRepository = name => {
  return dispatch => {
    dispatch(createRepositoryStart())
    axios.get('https://api.github.com/repos/' + name)
      .then(getResponse => {
        // axios.get(getResponse.data.languages_url)
        //   .then(languagesResponse => {
        //     repositoryCreate(name, getResponse.data, languagesResponse.data)
        //     dispatch(createRepositorySuccess())
        //   })
        //   .catch(languagesError => {
        //     dispatch(createRepositoryFail())
        //   })
        console.log(getResponse)
      })
      .catch(getError => {
        dispatch(createRepositoryFail('Repository not found'))
      })
  }
}

const createRepositoryStart = () => {
  return {
    type: actionTypes.CREATE_REPOSITORY_START,
    error: null
  }
}

const createRepositorySuccess = () => {
  return {
    type: actionTypes.CREATE_REPOSITORY_SUCCESS,
  }
}

const createRepositoryFail = error => {
  return {
    type: actionTypes.CREATE_REPOSITORY_FAIL,
    error: error
  }
}