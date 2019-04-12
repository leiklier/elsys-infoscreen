import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../style/index.less'

import LastBlogpost from '../routes/LastBlogpost'

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
				<LastBlogpost lastPost={blog.lastPost} />
			</div>
		)
	}
}

export default App
