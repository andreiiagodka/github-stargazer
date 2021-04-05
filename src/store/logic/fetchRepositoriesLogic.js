import { createLogic } from 'redux-logic'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'
const fetchRepositoriesLogic = createLogic({
  type: actionTypes.FETCH_REPOSITORIES,
  debounce: 500,
  latest: true,
  
  process({ firebase }, dispatch, done) {
    firebase.database().ref('repositories').once('value')
      .then(response => {
        dispatch( actions.fetchRepositoriesSuccess(response.val()) )
      })
      .catch(() => {
        dispatch( actions.failOperation() )
      })
      .finally(() => {
        done()
      })
  }
})

export default fetchRepositoriesLogic
