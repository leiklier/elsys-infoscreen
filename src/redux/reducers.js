import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import blog from './blog/reducers'

export default history =>
	combineReducers({
		router: connectRouter(history),
		blog
	})
