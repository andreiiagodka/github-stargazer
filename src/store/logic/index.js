import { createLogicMiddleware } from 'redux-logic'

import axios from 'axios'
import { firebase } from '../../config/firebase'

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

const dependencies = {
  axios: axios,
  firebase: firebase
}

const middleware = createLogicMiddleware(logic, dependencies)

export default middleware
