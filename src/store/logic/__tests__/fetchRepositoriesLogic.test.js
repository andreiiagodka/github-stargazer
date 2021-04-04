import { createMockStore } from 'redux-logic-test'

import * as actionTypes from '../../actionTypes'
import logic from '..'

const valReponse = {
  id: {
    full_name: 'full_name',
    stargazers_count: 100,
    watchers_count: 200,
    forks_count: 300
  }
}
const onceResponse = {
  val: () => {
    return valReponse
  }
}
const once = () => {
  return Promise.resolve(onceResponse)
}
const ref = () => {
  return {
    once: once
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

describe('success', () => {
  it('should fetch repositories', done => {
    store.dispatch({ type: actionTypes.FETCH_REPOSITORIES })
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: actionTypes.FETCH_REPOSITORIES },
        { type: actionTypes.FETCH_REPOSITORIES_SUCCESS, repositories: valReponse }
      ])
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
              once: () => {
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

    store.dispatch({ type: actionTypes.FETCH_REPOSITORIES })
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: actionTypes.FETCH_REPOSITORIES },
        { type: actionTypes.FAIL_OPERATION }
      ])
      done()
    })
  })
})