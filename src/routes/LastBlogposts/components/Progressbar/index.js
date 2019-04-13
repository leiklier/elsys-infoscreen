import React, { Component } from 'react'
import moment from 'moment'
moment().format()

class Progressbar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			now: new Date(),
			intervalId: null
		}
	}

	componentDidMount() {
		// Update progress bar every 1 ms
		const intervalId = setInterval(() => {
			this.setState({
				now: moment().valueOf()
			})
		}, 1)

		this.setState({
			intervalId
		})
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId)
	}

	render() {
		const { start, duration } = this.props
		const { now } = this.state

		const progress = (now - start) / duration

		return (
			<div className="blog progress container">
				<div
					className="blog progress bar"
					style={{ width: `${progress * 100}%` }}
				/>
			</div>
		)
	}
}

export default Progressbar
