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
		minWidth: 225,
		margin: 15
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
				// activitySet = [this.state.activities];
				// console.log({ activitySet });
				// setState one more time to render the current all states from db..
				this.setState({
					action: [ ...this.state.action ],
					description: [ ...this.state.description ],
					count: [ ...this.state.count ]
				});
				// console.log(this.state)
			})
			.catch((err) => console.log(err));
	};

	render() {
		const activitySet = [ this.state ];
		const actions = activitySet[0].action
		const descriptions = activitySet[0].description
		const counts = activitySet[0].count
		const { classes } = this.props;
		// console.log(activitySet);
		// console.log(actions);

		return (
			<Fragment>
				{actions.map((action, index) => (
					<Card className={classes.card} key={index} align="center">
						<CardContent>
							<Typography className={classes.title}  gutterBottom>
								{actions[index]}
							</Typography>
							<Typography variant="h5" component="h2" color="textSecondary">
								{counts[index]}
							</Typography>
							<Typography variant="body2" component="p">
								{descriptions[index]}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Fragment>
		);
	}
}

// export default ActivityCards;
ActivityCards.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActivityCards);
