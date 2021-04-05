import { selectRepository, selectLoading, selectError } from '../fetchRepositorySelector'

const state = {
  fetchRepository: {
    repository: 'repository',
    loading: 'loading',
    error: 'error'
  }
}

describe('selectRepository', () => {
  it('returns `repository` state', () => {
    expect(selectRepository(state)).toEqual(state.fetchRepository.repository)
  })
})

describe('selectLoading', () => {
  it('returns `loading` state', () => {
    expect(selectLoading(state)).toEqual(state.fetchRepository.loading)
  })
})

describe('selectError', () => {
  it('returns `error` state', () => {
    expect(selectError(state)).toEqual(state.fetchRepository.error)
  })
})
