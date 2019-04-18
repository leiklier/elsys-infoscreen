import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
moment().format()

import { constants as blogConfig } from '../../config/blog'
import { fetchBlogpostsLast } from '../../redux/actions'

import BackgroundImage from '../../components/BackgroundImage'
import PostsProgress from './components/PostsProgress'
import Header from './components/Header'
import Textwrapper from './components/Textwrapper'
import Title from './components/Title'
import Date from './components/Date'
import Summary from './components/Summary'
import Progressbar from './components/Progressbar'

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
		this.state = {
			cycle: {
				intervalId: null,
				currentPostId: 0,
				lastTime: moment().valueOf()
			},
			fetch: {
				intervalId: null
			}
		}
	}

	componentDidMount() {
		this.props.fetch()

		// Fetch posts at certain interval
		const intervalIdFetch = setInterval(
			this.props.fetch,
			blogConfig.updateInterval * 1000
		)
		this.setState({
			fetch: {
				...this.state.fetch,
				intervalId: intervalIdFetch
			}
		})

		// Cycle through blog posts
		const intervalIdCycle = setInterval(() => {
			this.setState({
				cycle: {
					...this.state.cycle,
					currentPostId:
						(this.state.cycle.currentPostId + 1) % blogConfig.totalPosts,
					lastTime: moment().valueOf()
				}
			})
		}, (this.props.cycleTime / blogConfig.totalPosts) * 1000)

		this.setState({
			cycle: {
				...this.state.cycle,
				intervalId: intervalIdCycle
			}
		})
	}

	componentWillUnmount() {
		clearInterval(this.state.fetch.intervalId)
		clearInterval(this.state.cycle.intervalId)
	}

	render() {
		const { cycleTime, posts, fetching, fetched } = this.props
		const { currentPostId } = { ...this.state.cycle }
		const { totalPosts } = blogConfig

		const currentPost = posts[currentPostId]

		return (
			<div>
				{totalPosts > 1 ? (
					<PostsProgress
						currentPostId={currentPostId}
						totalPosts={totalPosts}
					/>
				) : (
					''
				)}

				<Header />

				<Textwrapper>
					<Title>{currentPost.title}</Title>
					<Date date={currentPost.date} />
				</Textwrapper>

				{currentPost.summary ? <Summary>{currentPost.summary}</Summary> : ''}

				{totalPosts > 1 ? (
					<Progressbar
						start={this.state.cycle.lastTime}
						duration={(this.props.cycleTime / blogConfig.totalPosts) * 1000}
					/>
				) : (
					''
				)}

				<BackgroundImage src={currentPost.imageUrl} />
			</div>
		)
	}
}

export default LastBlogposts
