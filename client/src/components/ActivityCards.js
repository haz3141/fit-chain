// Import Components
import React, { Component, Fragment } from 'react';

// Import Material-UI Components
import { Typography, Grid, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
// , Container
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

class ActivityCards extends Component {
	state = {
		action: [],
		description: [],
		count: []
	};

	componentDidMount() {
		this.loadActivities();
	}

	loadActivities = () => {
		API.getActivities()
			.then((res) => {
				// console.log(res.data);
				let data = res.data;
				data.map((data) =>
					this.setState({
						action: [ ...this.state.action, data.action ],
						description: [ ...this.state.description, data.description ],
						count: [ ...this.state.count, data.count ]
					})
				);
			})
			.catch((err) => console.log(err));
	};

	render() {
		const activitySet = [ this.state ];
		const actions = activitySet[0].action;
		const descriptions = activitySet[0].description;
		const counts = activitySet[0].count;
		const { classes } = this.props;
		// console.log(activitySet);
		// console.log(actions);

		return (
			<Fragment>
				<Grid container direction="row" justify="flex-start" alignItems="flex-start">
					<Box mt={5}>
						<Typography variant="h4" gutterBottom>
							Community Activity Blocks
						</Typography>
					</Box>
				</Grid>
				<Grid container direction="row" justify="flex-start" alignItems="flex-start">
					{actions.map((action, index) => (
						<Card className={classes.card} key={index} align="center">
							<CardContent>
								<Typography className={classes.description} variant="body2" component="p">
									{descriptions[index]}
								</Typography>
								<Typography variant="h5" component="h2" color="textSecondary">
									{counts[index]}
								</Typography>
								<Typography className={classes.title} gutterBottom>
									{actions[index]}
								</Typography>
							</CardContent>
						</Card>
					))}
				</Grid>
			</Fragment>
		);
	}
}

ActivityCards.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActivityCards);
