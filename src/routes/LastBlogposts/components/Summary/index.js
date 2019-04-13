import React, { Component } from 'react'

class Summary extends Component {
	constructor(props) {
		super(props)
	}

	render() {
    return <p className="blog summary"><mark>{this.props.children}</mark></p>
	}
}

export default Summary
