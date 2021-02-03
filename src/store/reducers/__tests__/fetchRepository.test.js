import reducer from '../fetchRepository'
import * as actionTypes from '../../actions/actionTypes'

describe('fetchRepository reducer', () => {
  it('should return initial state', () => {
    const oldState = undefined
    const action = {}
    const newState = { repository: null, loading: true, error: false }

    expect(reducer(oldState, action)).toEqual(newState)
  })

  it('when FETCH_REPOSITORY_SUCCESS action', () => {
    const repository = { id: 1 }

    const oldState = { repository: null, loading: true, error: false }
    const action = { type: actionTypes.FETCH_REPOSITORY_SUCCESS, repository: repository, loading: false }
    const newState = { repository: repository, loading: false, error: false }

    expect(reducer(oldState, action)).toEqual(newState)
  })

  it('when FETCH_REPOSITORIES_FAIL action', () => {
    const oldState = { repository: null, loading: true, error: false }
    const action = { type: actionTypes.FETCH_REPOSITORY_FAIL }
    const newState = { repository: null, loading: false, error: true }

    expect(reducer(oldState, action)).toEqual(newState)
  })
})