import { createLogic } from 'redux-logic'

import * as actionTypes from '../actions/actionTypes'
import { fetchRepositoriesActions } from '../actions'

const fetchRepositoriesLogic = createLogic({
  type: actionTypes.FETCH_REPOSITORIES,
  debounce: 500,
  latest: true,

  process({ firebase, action }, dispatch, done) {
    firebase.database().ref('repositories').once('value')
      .then(response => {
        const repositories = response.val()
        const fetchedRepositories = Object.keys(repositories).map(id => {
          return { id: id, ...repositories[id] }
        })
  
        dispatch( fetchRepositoriesActions.fetchRepositoriesSuccess(fetchedRepositories) )
      })
      .catch(() => {
        dispatch( fetchRepositoriesActions.fetchRepositoriesFail() )
      })
      .finally(() => {
        done()
      })
  }
})

export default fetchRepositoriesLogic 