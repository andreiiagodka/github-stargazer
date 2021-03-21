import * as actionTypes from './actionTypes'

export const deleteRepository = payload => ({
  type: actionTypes.DELETE_REPOSITORY,
  payload: payload
})
