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
    dispatch( actions.startOperation() )

    firebase.database().ref(`repositories/${action.id}`).once('value')
      .then(response => {
        const repository = { id: action.id, ...response.val() }

        dispatch( actions.fetchRepositorySuccess(repository) )
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