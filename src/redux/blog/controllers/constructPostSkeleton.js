export default function constructPostSkeleton() {
	return {
		title: 'No post fetched',
		date: null,
		summary: 'No summary provided',
		imageUrl: null,
		link: null,
		fetching: false,
		fetched: false,
		error: null
	}
}
