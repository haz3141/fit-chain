import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
// import Avatar from '@material-ui/core/Avatar';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
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
				{this.state.message}
			</Grid>
		);
	}
}

About.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
