import * as actionTypes from './actionTypes'

export const createRepository = payload => ({
  type: actionTypes.CREATE_REPOSITORY,
  payload
}) 