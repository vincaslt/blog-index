import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { reducers } from './modules'
import { sagas } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory()
const router = routerMiddleware(history)

const reducer = connectRouter(history)(reducers)

const middlewares = [
  sagaMiddleware,
  router
]

// apply the middlewares
let middleware = applyMiddleware(...middlewares)
let composeFn = process.env.NODE_ENV !== 'production'
  ? composeWithDevTools // adds devtools in development
  : compose

const enhancer = composeFn(middleware)

// create the store
const store = createStore(
  reducer,
  enhancer
)
sagaMiddleware.run(sagas)

export { store, history as browserHistory }
