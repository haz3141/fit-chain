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
		minWidth: 275,
	  },
	  bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	  },
	  title: {
		fontSize: 14,
	  },
	  pos: {
		marginBottom: 12,
	  }
});

class ActivityCards extends Component {
	state = {
		activities: {
			action: "",
			description: "",
			count: ""
		}
	};

	

	componentDidMount() {
		this.loadActivities();
	}

	loadActivities = () => {
		API.getActivities()
			.then((res) => {
				console.log(res.data);
				// TODO : DEEP DESTRUCTURE RES.DATA to set more states from activities: { action, description, count }
				// TODO : MAP OVER EACH ITEM FOUND. SET STATE, ...this.old..state..++ next FOUND, each iteration
				this.setState({ activities: res.data });
			})
			.catch((err) => console.log(err));
	};

	render() {
		const { classes } = this.props;

		return (
		<Fragment>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
					Word of the Day
					</Typography>
					<Typography variant="h5" component="h2">
					be
					
					nev
					
					lent
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
					adjective
					</Typography>
					<Typography variant="body2" component="p">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
					</Typography>
				</CardContent>
				{/* <CardActions>
					<Button size="small">Learn More</Button>
				</CardActions> */}
				</Card>
			{/* ADD DYNAMIC DATABASE POPULATION OF ACTIVITIES BY THIS USER */}
		</Fragment>)
	}
}

// export default ActivityCards;
ActivityCards.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActivityCards);