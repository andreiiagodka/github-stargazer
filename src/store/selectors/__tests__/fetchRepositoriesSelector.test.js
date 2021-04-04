import { selectLoading, selectError, selectFetchedRepositories } from '../fetchRepositoriesSelector'

const repositories = {
  '1': {
    full_name: 'full_name',
    stargazers_count: 100,
    watchers_count: 200,
    forks_count: 300
  }
}

const state = {
  fetchRepositories: {
    repositories: repositories,
    loading: 'loading',
    error: 'error'
  }
}

describe('selectLoading', () => {
  it('returns `loading` state', () => {
    expect(selectLoading(state)).toEqual(state.fetchRepositories.loading)
  })
})

describe('selectError', () => {
  it('returns `error` state', () => {
    expect(selectError(state)).toEqual(state.fetchRepositories.error)
  })
})

describe('selectFetchedRepositories', () => {
  it('returns fetched repositories', () => {
    const fetchedRepositories = [
      { id: '1', ...repositories['1'] }
    ]

    expect(selectFetchedRepositories(state)).toEqual(fetchedRepositories)
  })

  it('returns empty array', () => {
    const state = { 
      fetchRepositories: { repositories: [] } 
    }

    expect(selectFetchedRepositories(state)).toEqual([])
  })
})