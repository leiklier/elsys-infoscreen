import React, { Component } from 'react'

class Summary extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <p className="blog summary">{this.props.children}</p>
	}
}

export default Summary
