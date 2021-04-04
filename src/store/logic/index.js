import createRepositoryLogic from './createRepositoryLogic'
import fetchRepositoriesLogic from './fetchRepositoriesLogic'
import fetchRepositoryLogic from './fetchRepositoryLogic'
import deleteRepositoryLogic from './deleteRepositoryLogic'

const logic = [
  createRepositoryLogic,
  fetchRepositoriesLogic,
  fetchRepositoryLogic,
  deleteRepositoryLogic
]

export default logic