import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../style/index.less'

import LastBlogposts from '../routes/LastBlogposts'

@connect(store => {
	return {
		blog: store.blog
	}
})
class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { blog } = this.props

		return (
			<div className="App" style={{ height: '100%', width: '100%' }}>
				<LastBlogposts
          cycleTime={5 * 60 /*Seconds in total to cycle through all posts*/}
					posts={blog.posts}
					isFetching={blog.isFetchingPosts}
					isFetched={blog.isFetchedPosts}
					error={blog.errorPosts}
				/>
			</div>
		)
	}
}

export default App
