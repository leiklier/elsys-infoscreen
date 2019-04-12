import React, { Component } from 'react'

class Title extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <h1 className="blog">{this.props.children}</h1>
	}
}

export default Title
