import React, { Component } from 'react'

const fallbackImagePath = '/fallback_background.jpg'

class BackgroundImage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { src } = this.props
		let imagePath

		if (!src) imagePath = fallbackImagePath
		else imagePath = src

		return (
			<img
				src={imagePath}
				style={{
					minWidth: '100vw',
					minHeight: '100vh',
					zIndex: '-1',
					// CSS3-type vertical and horizontal centering:
					// (source: https://www.w3.org/Style/Examples/007/center.en.html)
					position: 'fixed',
					top: '50%',
					left: '50%',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)'
				}}
			/>
		)
	}
}

export default BackgroundImage
