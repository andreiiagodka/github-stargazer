import { createMockStore } from 'redux-logic-test'

import * as actionTypes from '../../actionTypes'
import logic from '..'

const remove = () => {
  return Promise.resolve()
}
const ref = () => {
  return {
    remove: remove
  }
}
const firebase = {
  database: () => {
    return {
      ref: ref
    }
  }
}

const injectedDeps = {
  axios: jest.fn(),
  firebase: firebase
}
let store
beforeEach(() => {
  store = createMockStore({
    logic,
    injectedDeps
  })
})

const history = { push: jest.fn() }
const payload = {
  id: 1,
  history: history
}

describe('success', () => {
  it('should delete repository and redirect to root page', done => {
    store.dispatch({ type: actionTypes.DELETE_REPOSITORY, payload })
    store.whenComplete(() => {
      expect(history.push).toHaveBeenCalled()
      done()
    })
  })
})

describe('failure', () => {
  it('should dispatch FAIL_OPERATION', done => {
    const firebase = {
      database: () => {
        return {
          ref: () => {
            return {
              remove: () => {
                return Promise.reject()
              }
            }
          }
        }
      }
    }
    const injectedDeps = {
      axios: jest.fn(),
      firebase: firebase
    }
    const store = createMockStore({
      logic,
      injectedDeps
    })

    store.dispatch({ type: actionTypes.DELETE_REPOSITORY, payload })
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: actionTypes.DELETE_REPOSITORY, payload },
        { type: actionTypes.FAIL_OPERATION }
      ])
      expect(history.push).not.toHaveBeenCalled()
      done()
    })
  })

  it('should reject when `paylod` is null', done => {
    store.dispatch({ type: actionTypes.DELETE_REPOSITORY, payload: null })
    store.whenComplete(() => {
      expect(store.actions).toEqual([])
      expect(history.push).not.toHaveBeenCalled()
      done()
    })
  })
})
