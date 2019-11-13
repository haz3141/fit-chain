import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import ActivityCards from '../components/ActivityCards';
import UserActions from '../components/UserActions';

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
	body: {
		height: '85vh'
	}
});

class Body extends Component {
	// TODO : CONDITIONALLY RENDER NESTED, from the Header
	// MAYBE PASS THIS UP TO BUTTONLINKS in the header.?
	// Note- changed body to class based component
	// TODO: Note - for now, ActivityCards are Dashboard showing all.
	// TODO: Need Portfolio to render from button links, so we can reuse header and footer..

	render() {
		const { classes } = this.props;
		return (
			<Grid className={classes.body} container direction="row" justify="center" alignItems="center">
				<Grid container item sm>
					<Fragment>
						<Switch>
							<Route exact path="/">
								<ActivityCards />
								<h1>/</h1>
							</Route>
							<Route exact path="/dashboard">
								<ActivityCards />
								<h1>DASHBOARD</h1>
							</Route>
							<Route path="/dashboard/profile">
								<UserActions />
								<h1>PROFILE</h1>
							</Route>
						</Switch>
					</Fragment>
				</Grid>
			</Grid>
		);
	}
}

Body.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Body);

// =========
// state = {
// 	currentPage: 'Dashboard'
// };

// handlePageChange = (page) => {
// 	this.setState({ currentPage: page });
// };

// renderPage = () => {
// 	if (this.state.currentPage === 'Dashboard') {
// 		return <ActivityCards />;
// 	} else if (this.state.currentPage === 'Profile') {
// 		return <UserActions />;
// 	} else {
// 		return <ButtonLinks />;
// 	}
// };

// <NavTabs
// 	currentPage={this.state.currentPage}
// 	handlePageChange={this.handlePageChange} />
// {this.renderPage()}
