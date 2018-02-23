import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

class Menus extends Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.navWalker	= this.navWalker.bind(this)
		this.state = {
			isOpen: false,
			logo: '<willpower />'
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	navWalker(Array) {
		let newArray = Array.map(Array => (
			<NavItem key={Array.name} className="ml-md-4">
				<Link className="nav-link" to={ `/${Array.link}` }>{ Array.name }</Link>
			</NavItem>		
		))
		return newArray
	}

	render() {
		const link = [
			{name: 'Home', link: ''},
			{name: 'About', link: 'about'},
			{name: 'Posts', link: 'posts'},
			{name: 'Contact', link: 'contact'}
		]
		return(
			<div>
				<Navbar light expand="sm">
					<div className="container">
						<NavbarBrand href="/"><h4>{ this.state.logo }</h4></NavbarBrand>
						<NavbarToggler onClick={ this.toggle } />
						<Collapse isOpen={ this.state.isOpen } navbar>
							<Nav className="ml-auto" navbar>
								{ this.navWalker(link) }
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</div>
		)
	}
}

export default Menus