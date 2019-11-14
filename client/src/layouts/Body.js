import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Grid, Box } from '@material-ui/core';
import ActivityCards from '../components/ActivityCards';
import UserActions from '../components/UserActions';
import Research from '../components/Research';

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
	body: {
		height: '100vh'
	}
});

class Body extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<Grid container direction="row">
					<Grid item />
					<Box mt={3} />
				</Grid>
				<Grid className={classes.body} container direction="row" justify="center" alignItems="flex-start">
					<Grid item sm={1} />
					<Grid container item sm>
						<Fragment>
							<Switch>
								<Route exact path="/">
									<ActivityCards />
								</Route>
								<Route exact path="/dashboard">
									<ActivityCards />
									{/* <h1>DASHBOARD</h1> */}
								</Route>
								<Route path="/dashboard/profile">
									<UserActions />
									<h1>Stay Active! Your blocks are shared with the community</h1>
								</Route>
								<Route path="/dashboard/research">
									<h1>Research new Activities</h1>
									<Research />
								</Route>
							</Switch>
						</Fragment>
					</Grid>
					<Grid item xs={1} />
				</Grid>
				<Grid container direction="row">
					<Grid item />
					<Box mt={3} />
				</Grid>
			</Fragment>
		);
	}
}

Body.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Body);
