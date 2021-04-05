import reducer from '../fetchRepositoriesReducer'
import * as actionTypes from '../../actionTypes'

const initialState = {
  repositories: [],
  loading: true,
  error: false
}

it('should return initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('when FAIL_OPERATION should update `loading` and `error` states', () => {
  const action = { type: actionTypes.FAIL_OPERATION }
  const newState = { ...initialState, loading: false, error: true }

  expect(reducer(initialState, action)).toEqual(newState)
})

it('when FETCH_REPOSITORIES_SUCCESS should fetch repositories and update `loading` state', () => {
  const repositories = 'repositories'

  const action = { type: actionTypes.FETCH_REPOSITORIES_SUCCESS, repositories: repositories }
  const newState = { ...initialState, repositories: repositories, loading: false }

  expect(reducer(initialState, action)).toEqual(newState)
})
