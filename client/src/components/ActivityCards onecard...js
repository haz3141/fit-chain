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
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

class ActivityCards extends Component {
	state = {
		activities: {
			action: [ '' ],
			description: [ '' ],
			count: [ '' ]
		}
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
						activities: {
							action: [ ...this.state.activities.action, data.action ],
							description: [ ...this.state.activities.description, data.description ],
							count: [ ...this.state.activities.count, data.count ]
						}
					})
				);
				// activitySet = [this.state.activities];
				// console.log({ activitySet });
				// setState one more time to render the current all states from db..
				this.setState({
					activities: {
						action: [ ...this.state.activities.action],
						description: [ ...this.state.activities.description],
						count: [ ...this.state.activities.count]
					}
				});
				// console.log(this.state)
			})
			.catch((err) => console.log(err));
	};

	render() {
		const activitySet = [this.state.activities];
		const { classes } = this.props;
		console.log(activitySet);

		return (
			<Fragment>
				{activitySet.map((activity) => (
					<Card className={classes.card} key={activity.description}>
						<CardContent>
							<Typography className={classes.title} color="textSecondary" gutterBottom>
								{activity.action}
							</Typography>
							<Typography variant="h5" component="h2">
								{activity.count}
							</Typography>
							{/* <Typography className={classes.pos} color="textSecondary">
								adjective
							</Typography> */}
							<Typography variant="body2" component="p">
								{activity.description}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Fragment>
		);
		/* <CardActions>
		<Button size="small">Learn More</Button>
	</CardActions> */
	}
}

// export default ActivityCards;
ActivityCards.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActivityCards);

// =

// ==== END

// {activitySet.forEach((activity, index) => (
// 	<Card className={classes.card}>
// 		<CardContent>
// 			<Typography className={classes.title} color="textSecondary" gutterBottom>
// 				{activity[index].action}
// 			</Typography>
// 			<Typography variant="h5" component="h2">
// 				{activity[index].count}
// 			</Typography>
// 			{/* <Typography className={classes.pos} color="textSecondary">
// 				adjective
// 			</Typography> */}
// 			<Typography variant="body2" component="p">
// 				{activity[index].description}
// 			</Typography>
// 		</CardContent>
// 	</Card>
// ))}
