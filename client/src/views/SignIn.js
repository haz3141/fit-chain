import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import backImage from '../images/padovafinal.jpeg';

// 'url(https://source.unsplash.com/random)'

const styles = (theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: `url("${backImage}")`,
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

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		fetch('/api/authenticate', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				if (res.status === 200) {
					this.props.history.push('/');
				} else {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch((err) => {
				console.error(err);
				alert('Error logging in. Please try again.');
			});
	};

	render() {
		const { classes } = this.props;

		return (
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<form onSubmit={this.onSubmit} className={classes.form} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										value={this.state.email}
										onChange={this.handleInputChange}
										variant="outlined"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										value={this.state.password}
										onChange={this.handleInputChange}
										variant="outlined"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									{/* <Link href="#" variant="body2">
										Forgot password?
									</Link> */}
								</Grid>
								<Grid item>
									<Link href="/signup" variant="body2">
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</form>
					</div>
				</Grid>
			</Grid>
		);
	}
}

SignIn.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
