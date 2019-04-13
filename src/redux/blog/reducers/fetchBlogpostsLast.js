import { cloneDeep } from 'lodash'

import {
	FETCH_BLOGPOSTS_LAST,
	FETCH_BLOGPOSTS_LAST_FULFILLED,
	FETCH_BLOGPOSTS_LAST_REJECTED
} from '../types'

export default function fetchBlogpostLast(state, action) {
	switch (action.type) {
	case FETCH_BLOGPOSTS_LAST: {
		let newState = cloneDeep(state)

		newState = {
			...newState,
			fetchingPosts: true
		}

		return newState
	}

	case FETCH_BLOGPOSTS_LAST_FULFILLED: {
		let newState = cloneDeep(state)

		newState = {
			...newState,
			posts: action.payload,
			fetchingPosts: false,
			fetchedPosts: true,
			errorPosts: null
		}

		return newState
	}

	case FETCH_BLOGPOSTS_LAST_REJECTED: {
		let newState = cloneDeep(state)

		newState = {
			...newState,
			...action.payload,
			fetchingPosts: false,
			fetchedPosts: false
		}

		return newState
	}

	default:
		return
	}
}
