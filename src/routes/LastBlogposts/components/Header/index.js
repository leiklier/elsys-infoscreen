import React, { Component } from 'react'

class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<h1 className="blog header">
				<mark>Siste innlegg fra elsys.blog:</mark>
			</h1>
		)
	}
}

export default Header
