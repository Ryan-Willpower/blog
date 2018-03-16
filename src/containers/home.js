import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestPost } from '../actions'

import { Container } from 'reactstrap'
import styled from 'styled-components'
import Particles from 'react-particles-js'

class Home extends Component {
		componentDidMount() {
				this.props.requestPost()
		}

		render() {
				if (!this.props.post) {
						return <h1>loading...</h1>
				} else {
					return(
						<Particles params={{
							particles: {
								number: {
									value: 60,
									// density: {
									// 	enable: true,
									// 	value_area: 800
									// }
								},
								color: {
									value: "#123456"
								},
								shape: {
									type: "circle",
									stroke: {
										width: 0,
										color: "#123456"
									},
									polygon: {
										nb_sides: 5
									}
								},
								opacity: {
									value: 0.5,
									random: false,
									anim: {
										enable: false,
										speed: 1,
										opacity_min: 0.1,
										sync: false
									}
								},
								size: {
									value: 3,
									random: true,
									anim: {
										enable: false,
										speed: 40,
										size_min: 0.1,
										sync: false
									}
								},
								line_linked: {
									enable: true,
									distance: 150,
									color: "#555555",
									opacity: 0.4,
									width: 1
								},
								move: {
									enable: true,
									speed: 6,
									direction: "none",
									random: false,
									straight: false,
									out_mode: "out",
									bounce: false,
									attract: {
										enable: false,
										rotateX: 600,
										rotateY: 1200
									}
								}
							},
							retina_detect: true
						}} />
					)
				}
		}
}

const mapStateToProps = (state) => {
		return({
				post: state.post
		})
}

export default connect(mapStateToProps, { requestPost })(Home)
