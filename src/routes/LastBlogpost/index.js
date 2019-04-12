import React, { Component } from 'react'
import { connect } from 'react-redux'

import { constants as blogConfig } from '../../config/blog'
import { fetchBlogpostLast } from '../../redux/actions'

import BackgroundImage from '../../components/BackgroundImage'
import Title from './components/Title'
import Date from './components/Date'

@connect(
	null,
	(dispatch, ownProps) => {
		return {
			fetch: () => {
				dispatch(fetchBlogpostLast())
			}
		}
	}
)
class LastBlogpost extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.fetch()
	}

	render() {
		const { lastPost } = this.props
		return (
			<div>
				{lastPost.title}, {lastPost.excerpt}
				<Title>{lastPost.title}</Title>
				<Date date={lastPost.date} />
				<BackgroundImage src={lastPost.imageUrl} />
			</div>
		)
	}
}

export default LastBlogpost
