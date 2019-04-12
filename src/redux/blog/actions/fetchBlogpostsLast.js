import axios from 'axios'

import { constants as blogConfig } from '../../../config/blog'
import { extractSummary } from '../controllers'
import {
	FETCH_BLOGPOSTS_LAST,
	FETCH_BLOGPOSTS_LAST_FULFILLED,
	FETCH_BLOGPOSTS_LAST_REJECTED
} from '../types'

export default function fetchBlogpostLast() {
	return (dispatch, getState) => {
		const queryUrl =
			blogConfig.host +
			blogConfig.basePath +
			'posts' +
			`?per_page=${blogConfig.totalPosts}` // restricts number of posts

		dispatch({
			type: FETCH_BLOGPOSTS_LAST
		})

		return axios
			.get(queryUrl)
			.then(response => {
				let payload = new Array(blogConfig.totalPosts)
				let imageQueries = new Array(blogConfig.totalPosts)

				for (const i in payload) {
					const { title, date, content, link, featured_media } = response.data[
						i
					]
					let post = {
						title: title.rendered,
						date,
						summary: extractSummary(content.rendered),
						link
					}
					// Have to fetch imageUrl in separate queries:
					if (featured_media) {
						imageQueries[i] = axios.get(
							blogConfig.host + blogConfig.basePath + 'media/' + featured_media
						)
					}

					payload[i] = post
				}

				// Execute all non-empty imageUrl queries:
				axios
					.all(
						imageQueries.filter(query => {
							return typeof query !== 'undefined'
						})
					)
					.then(responses => {
						let responseIndex = 0
						for (const i in imageQueries) {
							if (typeof imageQueries[i] === 'undefined') continue
							if (responses.length - 1 === i) break
							payload[i].imageUrl = responses[responseIndex].data.guid.rendered
							responseIndex++
						}
					})

				dispatch({
					type: FETCH_BLOGPOSTS_LAST_FULFILLED,
					payload
				})
			})
			.catch(error => {
				dispatch({
					type: FETCH_BLOGPOSTS_LAST_REJECTED,
					payload: { error }
				})
			})
	}
}
