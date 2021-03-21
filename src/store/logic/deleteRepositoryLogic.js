import { createLogic } from 'redux-logic'

import * as actionTypes from '../actionTypes'

const URL = 'https://api.github.com/repos'

const deleteRepositoryLogic = createLogic({
  type: actionTypes.DELETE_REPOSITORY,
  debounce: 500,
  latest: true,

  validate({ action }, allow, reject) {
    if (action.payload) {
      allow(action)
    } else {
      reject()
    }
  },

  process({ firebase, action }, dispatch, done) {
    const { id, history } = action.payload

    firebase.database().ref(`repositories/${id}`).remove()
    .then(() => {
      history.push('/')
    })
    .catch(() => {

    })
    .finally(() => {
      done()
    })
  }
})

export default deleteRepositoryLogic