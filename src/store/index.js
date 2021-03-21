import { createStore, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'

import axios from 'axios'
import { firebase } from '../config/firebase'

import reducer from './reducer'
import logic from './logic'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const dependencies = {
  axios: axios,
  firebase: firebase
}

const logicMiddleware = createLogicMiddleware(logic, dependencies)

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(logicMiddleware)
))

export default store