import { createLogic } from 'redux-logic'

import * as actionTypes from '../actions/actionTypes'
import { fetchRepositoryActions } from '../actions'

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
        const repository = { id: action.id, ...response.val() }

        dispatch( fetchRepositoryActions.fetchRepositorySuccess(repository) )
      })
      .catch(() => {
        dispatch( fetchRepositoryActions.fetchRepositoryFail() )
      })
      .finally(() => {
        done()
      })
  }
})

export default fetchRepositoryLogic