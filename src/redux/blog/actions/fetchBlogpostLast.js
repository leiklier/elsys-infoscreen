import axios from 'axios'

import { constants as blogConfig } from '../../../config/blog'

import {
	FETCH_BLOGPOST_LAST,
	FETCH_BLOGPOST_LAST_FULFILLED,
	FETCH_BLOGPOST_LAST_REJECTED
} from '../types'

export default function fetchBlogpostLast() {
	return (dispatch, getState) => {
		const queryUrl =
			blogConfig.host + blogConfig.basePath + 'posts' + '?per_page=1' // restricts to latest post only

		dispatch({
			type: FETCH_BLOGPOST_LAST
		})

		return axios
			.get(queryUrl)
			.then(response => {
				const { title, date, excerpt, link } = response.data[0]

				dispatch({
					type: FETCH_BLOGPOST_LAST_FULFILLED,
					payload: {
						title: title.rendered,
						date,
						excerpt: excerpt.rendered,
						link
					}
				})
			})
			.catch(error => {
				dispatch({
					type: FETCH_BLOGPOST_LAST_REJECTED,
					payload: { error }
				})
			})
	}
}
