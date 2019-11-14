// Import Components
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Import Material-UI Components
import Button from '@material-ui/core/Button';
import { Typography, Box, Grid } from '@material-ui/core';

import blockLogo from '../images/blocklogo.png';

// from FitChain Typography  style={{ flex: 1 }}

class ButtonLinks extends Component {
	render() {
		let logo1 = blockLogo;
		return (
			<Fragment>
				<Grid container direction="row" alignItems="center">
					<Grid item xs>
						<Box display="flex" justifyContent="flex-start">
							<Typography variant="h5" color="inherit" style={{ flex: 1 }}>
								Workout Nav Bar
							</Typography>
						</Box>
					</Grid>

					<Grid item xs>
						<Box display="flex" justifyContent="flex-start">
							<Button color="inherit" component={Link} to="/about">
								<img src={logo1} alt="Block Logo" width={'7%'} height={'7%'} mode="fit" />
								<Box m="1vh" />
								<Typography variant="h4" color="inherit">
									FitChain
								</Typography>
							</Button>
						</Box>
					</Grid>

					<Grid item xs>
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
						</Box>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export { ButtonLinks };
