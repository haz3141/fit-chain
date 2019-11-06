// import { AppBar, Toolbar } from '@material-ui/core';
// import { Toolbar } from '@material-ui/core';
import React, { Component } from 'react';

class Navbar extends Component {
	constructor() {
		super();
		// Sets Default Message
		this.state = {
			message: 'Loading...'
		};
	}

	componentDidMount() {
		// GET Message from Server Using Fetch API
		fetch('/api/Navbar').then((res) => res.text()).then((res) =>
			this.setState({
				message: res
			})
		);
	}

	render() {
		return (
			<div>
				
				<h1>Navbar</h1>
				<p>{this.state.message}</p>
			</div>
		);
	}
}

export { Navbar };
