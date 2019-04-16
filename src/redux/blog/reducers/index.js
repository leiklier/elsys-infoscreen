import fetchBlogpostsLast from './fetchBlogpostsLast'
import { constants as blogConfig } from '../../../config/blog'
import { constructPostSkeleton } from '../controllers'

export default function reducer(
	state = {
		posts: new Array(blogConfig.totalPosts).fill(constructPostSkeleton()),
		isFetchingPosts: false,
		isFetchedPosts: false,
		errorPosts: false
	},
	action
) {
	return fetchBlogpostsLast(state, action) || state
}
