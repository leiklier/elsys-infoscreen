/**
 * ~src/index.js
 * This is the main entry file for Reactjs
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from './redux/configureStore'

import App from './App'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
