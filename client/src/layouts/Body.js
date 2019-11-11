import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import ActivityCards from '../components/ActivityCards';
import NavTabs from '../components/NavTabs';
import UserActions from "../components/UserActions"
import { ButtonLinks } from "../components/ButtonLinks"

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';


const styles = (theme) => ({
	body: {
		height: '85vh'
	}
});

class Body extends Component {
	state = {
		currentPage: 'Dashboard'
	};

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	renderPage = () => {
		if (this.state.currentPage === 'Dashboard') {
			return <ActivityCards />;
		} else if (this.state.currentPage === 'Profile') {
			return <UserActions />;
		} else {
			return <ButtonLinks />;
		}
	};

	render() {
		const { classes } = this.props;
		return (
			<Grid className={classes.body} container direction="row" justify="center" alignItems="center">
				<Grid container item sm>
					<Fragment>
						<NavTabs 
							currentPage={this.state.currentPage} 
							handlePageChange={this.handlePageChange} />
						{this.renderPage()}
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
