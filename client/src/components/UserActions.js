// Import Components
import React, { Component, Fragment } from 'react';

// Import Material-UI Components
import { Typography, Grid, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import API from '../utils/API';

const styles = (theme) => ({
	card: {
		maxWidth: '30vh',
		maxHeight: '20vh',
		margin: '1vh',
		background: 'linear-gradient(45deg, #986AC0 30%, #A086BD 90%)',
		borderRadius: 3,
		color: 'white',
		boxShadow: '0 4px 6px 3x rgba(255, 105, 135, .3)'
	},
	title: {
		fontSize: '3vh'
	},
	description: {
		fontSize: '2vh'
	},
	timestamp: {
		fontSize: '1vh'
	}
});

class UserActions extends Component {
	state = {
		action: [],
		description: [],
		count: [],
		timestamp: []
	};

	componentDidMount() {
		this.loadActivities();
	}

	// Return the associated email profile/activities
	loadActivities = () => {
		API.getUserActions()
			.then((res) => {
				// console.log("Load activities, UserActions . from API = res =", res);
				let data = res.data;
				data.map((data) =>
					this.setState({
						action: [ ...this.state.action, data.action ],
						description: [ ...this.state.description, data.description ],
						count: [ ...this.state.count, data.count ],
						timestamp: [ ...this.state.timestamp, data.timestamp ]
					})
				);
			})
			.catch((err) => console.log(err));
	};

	render() {
		const activitySet = [ this.state ];

		const { classes } = this.props;

		const actions = activitySet[0].action;
		const descriptions = activitySet[0].description;
		const counts = activitySet[0].count;
		const timestamps = activitySet[0].timestamp;

		return (
			<Fragment>
				<Grid container direction="row" justify="flex-start" alignItems="flex-start">
					<Box mt={5}>
						<Typography variant="h4" gutterBottom>
							Your Building Blocks
						</Typography>
					</Box>
				</Grid>
				<Grid container direction="row" justify="flex-start" alignItems="flex-start">
					{actions.map((action, index) => (
						<Card className={classes.card} key={index} align="center">
							<CardContent>
								<Typography gutterBottom className={classes.description} variant="body2" component="p">
									{descriptions[index]}
								</Typography>
								<Typography variant="h5" component="h2" color="textSecondary">
									{counts[index]}
								</Typography>
								<Typography className={classes.title} gutterBottom>
									{actions[index]}
								</Typography>
								<Typography className={classes.timestamp} variant="body2" component="p">
									{timestamps[index]}
								</Typography>
							</CardContent>
						</Card>
					))}
				</Grid>
			</Fragment>
		);
	}
}

UserActions.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserActions);
