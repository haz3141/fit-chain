// Import Components
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Import Material-UI Components
import Button from '@material-ui/core/Button';
import { Typography, Box } from '@material-ui/core';

import blockLogo from '../images/blocklogo.png';

// from FitChain Typography  style={{ flex: 1 }}

class ButtonLinks extends Component {
	render() {
		let logo1 = blockLogo;
		return (
			<Fragment>
				<Box display="flex" flexShrink={1} justifyContent="flex-start">
				<Typography variant="h5" color="inherit" style={{ flex: 1 }} >Workout Nav Bar</Typography>

				</Box>
					<Box display="flex" flexShrink={1} justifyContent="flex-start">
						<Button color="inherit" component={Link} to="/about">
							<img src={logo1} alt="Block Logo" width={'5%'} height={'5%'} mode="fit" />
							<Box m="1rem" />
							<Typography variant="h4" color="inherit">
								FitChain
							</Typography>
						</Button>
					</Box>
					<Box display="flex" justifyContent="flex-end">
						<Button color="inherit" component={Link} to="/dashboard">
							All
						</Button>
						<Button color="inherit" component={Link} to="/dashboard/profile">
							Profile
						</Button>
						<Button color="inherit" component={Link} to="/exercise">
							Building Blocks
						</Button>
						{/* <Button color="inherit" component={Link} to="/">Home</Button> */}
					</Box>
				
			</Fragment>
		);
	}
}

export { ButtonLinks };
