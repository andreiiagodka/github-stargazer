import { createLogic } from 'redux-logic'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

const fetchRepositoriesLogic = createLogic({
  type: actionTypes.FETCH_REPOSITORIES,
  debounce: 500,
  latest: true,

  process({ firebase }, dispatch, done) {
    dispatch( actions.startOperation() )

    firebase.database().ref('repositories').once('value')
      .then(response => {
        const repositories = response.val()
        let fetchedRepositories = []
        if (repositories) {
          fetchedRepositories = Object.keys(repositories).map(id => {
            return { id: id, ...repositories[id] }
          })
        }
        
        dispatch( actions.fetchRepositoriesSuccess(fetchedRepositories) )
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