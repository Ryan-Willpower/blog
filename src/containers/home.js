import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestPost } from '../actions'
import { Link } from 'react-router-dom'

import { Container } from 'reactstrap'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import param from '../Particles'

const Load = styled.h1`
	margin: 20px;
	text-align: center;
	width: 100vw;
	height: 100vh;
	background: #3F3F3F;
`

const Particled = styled(Particles)`
	width: 100%;
	height: 100vh;
	position: relative;
	background: #3F3F3F;
`
const Main = styled.div`
	color: #000;
	width: 80%;
	height: 80%;
	text-align: center;
	position: absolute;
	top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
	border-radius: 20px;
	background: #EEE;
`

const Header = styled.h1`
	margin-top: 5%;
	font-size: 6vw;
`

const Desc = styled.p`
	margin-top: 4%;
	margin-bottom: 17%;
	font-size: 3vw;
`

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 2vw;
`

const Warp = StyledLink.extend`
	margin-right: 20%;
`


class Home extends Component {
		componentDidMount() {
			this.props.requestPost()
		}

		render() {
			if (!this.props.post) {
					return <Load>loading...</Load>
			} else {
				return(
					<div>
						<Particled params={param} />
						<Main>
							<Header>&#123; Ryan Willpower &#125;.js</Header>
							<Desc>" The Fullstack Developer "</Desc>
							<Warp to="about">About me</Warp>
							<Warp to="post">Blog</Warp>
							<StyledLink to="contact">Contact</StyledLink>
						</Main>
					</div>
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
