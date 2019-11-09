// Import Components
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

// Import Material-UI Components
import Button from '@material-ui/core/Button';

class ButtonLinks extends Component {
	render() {
		return (
			<Fragment>
			<Button color="inherit" component={Link} to="/">Home</Button>
			<Button color="inherit" component={Link} to="/logout">Logout</Button>
			<Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
			<Button color="inherit" component={Link} to="/exercise">Exercise</Button>
			</Fragment>
		);
	}
}

export { ButtonLinks };

