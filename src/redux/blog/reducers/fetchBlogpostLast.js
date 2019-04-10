import { cloneDeep } from 'lodash'

import {
	FETCH_BLOGPOST_LAST,
	FETCH_BLOGPOST_LAST_FULFILLED,
	FETCH_BLOGPOST_LAST_REJECTED
} from '../types'

export default function fetchBlogpostLast(state, action) {
	switch (action.type) {
	case FETCH_BLOGPOST_LAST: {
		let newState = cloneDeep(state)

		newState.lastPost = {
			...newState.lastPost,
			fetching: true
		}

		return newState
	}

	case FETCH_BLOGPOST_LAST_FULFILLED: {
		let newState = cloneDeep(state)

		newState.lastPost = {
			...newState.lastPost,
			fetching: false,
			fetched: true,
			error: null,
			...action.payload
		}

		return newState
	}

	case FETCH_BLOGPOST_LAST_REJECTED: {
		let newState = cloneDeep(state)

		newState.lastPost = {
			...newState.lastPost,
			fetching: false,
			fetched: false,
			...action.payload
		}

		return newState
	}

	default:
		return
	}
}
