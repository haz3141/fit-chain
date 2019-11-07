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
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/secret">Secret</Button>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
			</Fragment>
		);
	}
}

export { ButtonLinks };

