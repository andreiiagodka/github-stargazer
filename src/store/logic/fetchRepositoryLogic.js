import { createLogic } from 'redux-logic'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

const fetchRepositoryLogic = createLogic({
  type: actionTypes.FETCH_REPOSITORY,
  debounce: 500,
  latest: true,

  validate({ action }, allow, reject) {
    if (action.id) {
      allow(action)
    } else {
      reject()
    }
  },

  process({ firebase, action }, dispatch, done) {
    firebase.database().ref(`repositories/${action.id}`).once('value')
      .then(response => {
        dispatch( actions.fetchRepositorySuccess(response.val()) )
      })
      .catch(() => {
        dispatch( actions.failOperation() )
      })
      .finally(() => {
        done()
      })
  }
})

export default fetchRepositoryLogic