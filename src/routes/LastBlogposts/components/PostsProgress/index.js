import React, { Component } from 'react'

class PostsProgress extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { currentPostId, totalPosts } = this.props

		return (
			<h1 className="blog progress posts">
				<mark>{`[${currentPostId + 1}/${totalPosts}]`}</mark>
			</h1>
		)
	}
}

export default PostsProgress
