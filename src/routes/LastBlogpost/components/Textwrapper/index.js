import React, { Component } from 'react'

class Textwrapper extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div className="blog textwrapper">{this.props.children}</div>
	}
}

export default Textwrapper
