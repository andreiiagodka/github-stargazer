import { createLogic } from 'redux-logic'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

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
        dispatch( actions.failOperation() )
      })
      .finally(() => {
        done()
      })
  }
})

export default deleteRepositoryLogic