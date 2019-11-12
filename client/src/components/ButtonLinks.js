// Import Components
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Import Material-UI Components
import Button from '@material-ui/core/Button';

class ButtonLinks extends Component {
	render() {
		return (
			<Fragment>
			<Button color="inherit" component={Link} to="/dashboard">All Activities</Button>
			{/* CHANGE BACK  when cond. render<Button color="inherit" component={Link} to="/dashboard/profile">Profile</Button> */}

			<Button color="inherit" component={Link} to="/profile">Profile</Button>
			<Button color="inherit" component={Link} to="/exercise">Building Blocks</Button>
			<Button color="inherit" component={Link} to="/">Home</Button>
			</Fragment>
		);
	}
}

export { ButtonLinks };

