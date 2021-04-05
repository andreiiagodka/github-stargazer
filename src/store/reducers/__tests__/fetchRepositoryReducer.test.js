import reducer from '../fetchRepositoryReducer'
import * as actionTypes from '../../actionTypes'

const initialState = {
  repository: null,
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

it('when FETCH_REPOSITORY_SUCCESS should fetch repositories and update `loading` state', () => {
  const repository = 'repository'

  const action = { type: actionTypes.FETCH_REPOSITORY_SUCCESS, repository: repository }
  const newState = { ...initialState, repository: repository, loading: false }

  expect(reducer(initialState, action)).toEqual(newState)
})
