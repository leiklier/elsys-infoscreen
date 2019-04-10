import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'

import { routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'

export const history = createBrowserHistory()

const middleware = applyMiddleware(
	routerMiddleware(history),
	thunk,
	createLogger()
)

export default function configureStore(preloadedState) {
	return createStore(
		createRootReducer(history),
		preloadedState,
		compose(middleware)
	)
}
