// Import Components
import React, { Component, Fragment } from 'react';

// Import Material-UI Components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import API from '../utils/API';

const styles = (theme) => ({
	card: {
		minWidth: "10%",
		maxWidth: "25%",
		margin: 15,
		background: 'linear-gradient(45deg, #986AC0 30%, #A086BD 90%)',
		borderRadius: 3,
		color: 'white',
		boxShadow: '0 4px 6px 3x rgba(255, 105, 135, .3)'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 24
	},
	description: {
		fontSize: 20
	},
	timestamp: {
		fontSize: 20
	},
	pos: {
		marginBottom: 12
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

	// TODO: NEED TO FILTER IN THE API FUNCTION for current USER email / _id.. 
	// need the res =>>>  = return the associated email profile/activities 
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
		console.log(timestamps)
		
		// console.log({activitySet})
		// let resultTime = timestamps.toDateString
		// console.log({resultTime})
		// console.log(activitySet);
		// console.log(actions);
		// console.log(timestamps)
		// timestamp |date:"MMM d, y, HH:mm"

		return (
			<Fragment>
				{actions.map((action, index) => (
					<Card className={classes.card} key={index} align="center">
						<CardContent>
							<Typography className={classes.title} gutterBottom>
								{actions[index]}
							</Typography>
							<Typography variant="h5" component="h2" color="textSecondary">
								{counts[index]}
							</Typography>
							<Typography className={classes.description} variant="body2" component="p">
								{descriptions[index]}
							</Typography>
							<Typography className={classes.timestamp} variant="body2" component="p">
								{timestamps[index]}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Fragment>
		);
	}
}

UserActions.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserActions);
