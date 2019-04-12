import React, { Component } from 'react'
import { formatDate } from './controllers'

class BlogpostDate extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { date } = this.props
		return <p classname="blog date">{formatDate(date)}</p>
	}
}

export default BlogpostDate
