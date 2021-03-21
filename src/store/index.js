import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers'
import logicMiddleware from './logic'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logicMiddleware)
))

export default store