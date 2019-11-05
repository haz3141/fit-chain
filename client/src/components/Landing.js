import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Landing extends Component {
	constructor() {
        super();
		// Sets Default Message
		this.state = {
			message: 'Loading...Landing'
		};
	}

	componentDidMount() {
		// GET Message from Server Using Fetch API
		fetch('/api/landing').then((res) => res.text()).then((res) =>
			this.setState({
				message: res
			})
		);
	}

	render() {
		return (
			<div>
				<h1>Landing</h1>
				<p>{this.state.message}</p>
				<Button component={Link} to="/login" type="submit" fullWidth variant="contained" color="primary">
					Sign In
				</Button>
			</div>
		);
	}
}

export { Landing };

// className={classes.submit}