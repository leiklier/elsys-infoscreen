import fetchBlogpostLast from './fetchBlogpostLast'

export default function reducer(
	state = {
		lastPost: {
			title: 'No post fetched',
			date: null,
			excerpt: 'No summary provided',
			imageUrl: null,
			link: null,
			fetching: false,
			fetched: false,
			error: null
		}
	},
	action
) {
	return fetchBlogpostLast(state, action) || state
}
