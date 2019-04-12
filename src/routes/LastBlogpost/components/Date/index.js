import React, { Component } from 'react'
import { formatDate } from './controllers'

class Date extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { date } = this.props
		return <p className="blog date">{formatDate(date)}</p>
	}
}

export default Date
