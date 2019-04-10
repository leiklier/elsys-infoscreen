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
				const { title, date, excerpt, link, featured_media } = response.data[0]

				let payload = {
					title: title.rendered,
					date,
					excerpt: excerpt.rendered,
					link
				}

				// Have to fetch imageUrl in separate query:
				if (featured_media) {
					const imageQueryUrl =
						blogConfig.host + blogConfig.basePath + 'media/' + featured_media

					axios.get(imageQueryUrl).then(response => {
						const imageUrl = response.data.guid.rendered

						payload = {
							...payload,
							imageUrl
						}

						dispatch({
							type: FETCH_BLOGPOST_LAST_FULFILLED,
							payload
						})
					})
				}

				dispatch({
					type: FETCH_BLOGPOST_LAST_FULFILLED,
					payload
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
