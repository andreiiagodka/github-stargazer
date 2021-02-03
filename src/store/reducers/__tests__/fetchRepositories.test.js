import reducer from '../fetchRepositories'
import * as actionTypes from '../../actions/actionTypes'

describe('fetchRepositories reducer', () => {
  it('should return initial state', () => {
    const oldState = undefined
    const action = {}
    const newState = { repositories: [], loading: false }

    expect(reducer(oldState, action)).toEqual(newState)
  })

  it('when FETCH_REPOSITORIES_START action', () => {
    const oldState = { repositories: [], loading: false }
    const action = { type: actionTypes.FETCH_REPOSITORIES_START, loading: true }
    const newState = { repositories: [], loading: true }

    expect(reducer(oldState, action)).toEqual(newState)
  })

  it('when FETCH_REPOSITORIES_SUCCESS action', () => {
    const repository = [ { id: 1 } ]

    const oldState = { repositories: [], loading: false }
    const action = { type: actionTypes.FETCH_REPOSITORIES_SUCCESS, repositories: [repository], loading: false }
    const newState = { repositories: [repository], loading: false }

    expect(reducer(oldState, action)).toEqual(newState)
  })
})