import { createLogic } from 'redux-logic'

import * as actionTypes from '../actions/actionTypes'

const URL = 'https://api.github.com/repos'

const createRepositoryLogic = createLogic({
  type: actionTypes.CREATE_REPOSITORY,
  debounce: 500,
  latest: true,

  validate({ action }, allow, reject) {
    if (action.payload) {
      allow(action)
    } else {
      reject()
    }
  },

  process({ axios, firebase, action }, dispatch, done) {
    const { name, history, setSubmitting, setFieldError } = action.payload

    const getRepository = axios.get(`${URL}/${name}`)
    const getRepositoryLanguages = axios.get(`${URL}/${name}/languages`)

    axios
      .all([getRepository, getRepositoryLanguages])
      .then(response => {
        const [ repository, languages ] = response

        const attributes = {
          full_name: repository.data.full_name.toLowerCase(),
          stargazers_count: repository.data.stargazers_count,
          watchers_count: repository.data.watchers_count,
          forks_count: repository.data.forks_count,
          languages: languages.data
        }

        firebase.database().ref('repositories').push().set(attributes)

        history.push('/')
      })
      .catch(() => {
        setFieldError('name', 'Repository not found')
      })
      .then(() => {
        setSubmitting(false)
        done()
      })
  }
})

export default createRepositoryLogic