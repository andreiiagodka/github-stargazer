import * as actions from '../actions'
import * as actionTypes from '../actionTypes'

describe('failOperation', () => {
  it('should create an action FAIL_OPERATION', () => {
    const expectedAction = { type: actionTypes.FAIL_OPERATION }

    expect(actions.failOperation()).toEqual(expectedAction)
  })
})

describe('createRepository', () => {
  it('should create an action CREATE_REPOSITORY', () => {
    const payload = { name: 'name' }
    const expectedAction = { type: actionTypes.CREATE_REPOSITORY, payload: payload }

    expect(actions.createRepository(payload)).toEqual(expectedAction)
  })
})

describe('deleteRepository', () => {
  it('should create an action DELETE_REPOSIOTRY', () => {
    const payload = { id: 'id' }
    const expectedAction = { type: actionTypes.DELETE_REPOSITORY, payload: payload }

    expect(actions.deleteRepository(payload)).toEqual(expectedAction)
  })
})

describe('fetchRepositories', () => {
  it('should create an action FETCH_REPOSITORIES', () => {
    const expectedAction = { type: actionTypes.FETCH_REPOSITORIES }

    expect(actions.fetchRepositories()).toEqual(expectedAction)
  })

  it('should create an action FETCH_REPOSITORIES_SUCCESS', () => {
    const repositories = 'repositories'
    const expectedAction = { type: actionTypes.FETCH_REPOSITORIES_SUCCESS, repositories: repositories }

    expect(actions.fetchRepositoriesSuccess(repositories)).toEqual(expectedAction)
  })
})

describe('fetchRepository', () => {
  it('should create an action FETCH_REPOSITORY', () => {
    const id = 'id'
    const expectedAction = { type: actionTypes.FETCH_REPOSITORY, id: id }

    expect(actions.fetchRepository(id)).toEqual(expectedAction)
  })

  it('should create an action FETCH_REPOSITORY_SUCCESS', () => {
    const repository = 'repository'
    const expectedAction = { type: actionTypes.FETCH_REPOSITORY_SUCCESS, repository: repository }

    expect(actions.fetchRepositorySuccess(repository)).toEqual(expectedAction)
  })
})
