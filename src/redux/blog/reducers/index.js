import fetchBlogpostLast from './fetchBlogpostLast'
import { constants as blogConfig } from '../../../config/blog'
import { constructPostSkeleton } from '../controllers'

export default function reducer(
	state = {
		posts: new Array(blogConfig.totalPosts).fill(constructPostSkeleton())
	},
	action
) {
	return fetchBlogpostLast(state, action) || state
}
