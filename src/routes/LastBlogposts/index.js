import React, { Component } from 'react'
import { connect } from 'react-redux'

import { constants as blogConfig } from '../../config/blog'
import { fetchBlogpostsLast } from '../../redux/actions'

import BackgroundImage from '../../components/BackgroundImage'
import Textwrapper from './components/Textwrapper'
import Title from './components/Title'
import Date from './components/Date'
import Summary from './components/Summary'

@connect(
	null,
	(dispatch, ownProps) => {
		return {
			fetch: () => {
				dispatch(fetchBlogpostsLast())
			}
		}
	}
)
class LastBlogposts extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.fetch()
	}

	render() {
		const { posts, fetching, fetched } = this.props
		return (
			<div>
				<Textwrapper>
					<Title>{posts[0].title}</Title>
					<Date date={posts[0].date} />
					<Summary>{posts[0].summary}</Summary>
				</Textwrapper>
				<BackgroundImage src={posts[0].imageUrl} />
			</div>
		)
	}
}

export default LastBlogposts
