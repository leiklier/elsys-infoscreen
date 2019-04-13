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
					cycleTime={30 /*Seconds in total to cycle through all posts*/}
					posts={blog.posts}
					fetching={blog.fetchingPosts}
					fetched={blog.fetchedPosts}
					error={blog.errorPosts}
				/>
			</div>
		)
	}
}

export default App
