import axios from 'axios'
import striptags from 'striptags'
import { Html5Entities as Entities } from 'html-entities'
const entities = new Entities()

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
				let payload = new Array(blogConfig.totalPosts).fill(false)
				let imageQueries = new Array(blogConfig.totalPosts)

				for (const i in payload) {
					const {
						title,
						date,
						content,
						excerpt,
						link,
						featured_media
					} = response.data[i]

					let post = {
						title: entities.decode(title.rendered),
						date: entities.decode(date),
						summary: entities.decode(
							extractSummary(
								content.rendered,
								blogConfig.summaryFallbackToExcerpt && excerpt.rendered
							)
						),
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
				Promise.all(
					imageQueries.filter(query => {
						return typeof query !== 'undefined'
					})
				).then(responses => {
					let responseIndex = 0
					for (const i in imageQueries) {
						if (typeof imageQueries[i] === 'undefined') continue
						if (responses.length - 1 === i) break // all imageQueries have already been gone through
						payload[i].imageUrl = responses[responseIndex].data.guid.rendered
						responseIndex++
					}

					dispatch({
						type: FETCH_BLOGPOSTS_LAST_FULFILLED,
						payload
					})
				})

				if (imageQueries.filter(el => typeof el !== 'undefined').length === 0) {
					dispatch({
						type: FETCH_BLOGPOSTS_LAST_FULFILLED,
						payload
					})
				}
			})
			.catch(error => {
				dispatch({
					type: FETCH_BLOGPOSTS_LAST_REJECTED,
					payload: { error }
				})
			})
	}
}
