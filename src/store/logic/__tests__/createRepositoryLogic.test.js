import { createMockStore } from 'redux-logic-test'

import * as actionTypes from '../../actionTypes'
import logic from '..'

const repositoryResponse = {
  data: {
    full_name: 'full_name',
    stargazers_count: 100,
    watchers_count: 200,
    forks_count: 300
  }
}
const languagesResponse = {
  data: {
    JavaScript: 500
  }
}
const response = [repositoryResponse, languagesResponse]

const axios = {
  get() { return Promise.resolve() },
  all() { return Promise.resolve(response) }
}

const set = jest.fn(() => {
  return Promise.resolve()
})
const push = () => {
  return {
    set: set
  }
}
const ref = () => {
  return {
    push: push
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
  axios: axios,
  firebase: firebase
}

let store
beforeEach(() => {
  store = createMockStore({
    logic,
    injectedDeps
  })
})

const name = 'name'
const history = { push: jest.fn() }
const setSubmitting = jest.fn()
const setFieldError = jest.fn()

const payload = { name, history, setSubmitting, setFieldError }

describe('success', () => {
  const attributes = {
    full_name: repositoryResponse.data.full_name,
    stargazers_count: repositoryResponse.data.stargazers_count,
    watchers_count: repositoryResponse.data.watchers_count,
    forks_count: repositoryResponse.data.forks_count,
    languages: languagesResponse.data
  }

  it('should create repository and redirect to root page', done => {
    store.dispatch({ type: actionTypes.CREATE_REPOSITORY, payload })
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: actionTypes.CREATE_REPOSITORY, payload }
      ])
      expect(firebase.database().ref().push().set).toHaveBeenCalledWith(attributes)
      expect(history.push).toHaveBeenCalledWith('/')
      expect(setSubmitting).toHaveBeenCalledWith(false)
      done()
    })
  })
})

describe('failure', () => {
  it('should assign an error when repository is not found', done => {
    const injectedDeps = {
      axios: {
        get() { return Promise.resolve() },
        all() { return Promise.reject() }
      },
      firebase: jest.fn()
    }
    const store = createMockStore({
      logic,
      injectedDeps
    })
    
    store.dispatch({ type: actionTypes.CREATE_REPOSITORY, payload })
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: actionTypes.CREATE_REPOSITORY, payload }
      ])
      expect(firebase.database().ref().push().set).not.toHaveBeenCalled()
      expect(history.push).not.toHaveBeenCalled()
      expect(setFieldError).toHaveBeenCalledWith('name', 'Repository not found')
      expect(setSubmitting).toHaveBeenCalledWith(false)
      done()
    })
  })

  it('should reject when `paylod` is null', done => {
    store.dispatch({ type: actionTypes.CREATE_REPOSITORY, payload: null })
    store.whenComplete(() => {
      expect(store.actions).toEqual([])
      expect(firebase.database().ref().push().set).not.toHaveBeenCalled()
      expect(history.push).not.toHaveBeenCalled()
      expect(setFieldError).not.toHaveBeenCalled()
      expect(setSubmitting).not.toHaveBeenCalled()
      done()
    })
  })
})
