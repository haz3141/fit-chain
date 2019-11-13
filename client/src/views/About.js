import React, { Component } from 'react';

// import Avatar from '@material-ui/core/Avatar';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import backImage from '../images/bikebridge.jpeg';

// ,
// 	image: {
// 		backgroundImage: `url("${backImage}")`,
// 		backgroundRepeat: 'no-repeat',
// 		backgroundSize: 'cover',
// 		backgroundPosition: 'center'
// 	}

const styles = (theme) => ({
	root: {
		height: '100vh',
		backgroundImage: `url("${backImage}")`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
});

class About extends Component {
	constructor() {
		super();
		// Sets Default Message
		this.state = {
			message: 'Loading...'
		};
	}

	componentDidMount() {
		// GET Message from Server Using Fetch API
		this.setState({
			message: 'Welcome to FitChain!'
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				{/* <Grid item xs={false} sm={4} md={7} /> */}
				<Grid item xs={12} sm={8} md={5} square>
					<div className={classes.paper}>
						<Typography component="h1" variant="h4">
							FitChain
							<br></br>
							<Link href="/signup" variant="h6" color="inherit">
								{"Don't have an account? Sign Up"}
							</Link>
						</Typography>
					</div>
				</Grid>
			</Grid>
		);
	}
}

About.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
