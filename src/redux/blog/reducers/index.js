export default function reducer(
	state = {
		lastPost: {
			title: 'No post fetched',
			timePublished: null,
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
	return state
}
