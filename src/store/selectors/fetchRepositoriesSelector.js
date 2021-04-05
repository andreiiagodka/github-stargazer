import { createSelector } from 'reselect'

const selectRepositories = state => state.fetchRepositories.repositories

export const selectLoading = state => state.fetchRepositories.loading
export const selectError = state => state.fetchRepositories.error

export const selectFetchedRepositories = createSelector(
  [selectRepositories],
  repositories => {
    if (repositories) {
      return Object.keys(repositories).map(id => {
        return { id: id, ...repositories[id] }
      })
    } else {
      return []
    }
  }
)
