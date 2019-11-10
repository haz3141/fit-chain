import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	paper: {
		marginTop: theme.spacing(8),
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
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
});

class SignUp extends Component {
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
		fetch('/api/register', {
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
				alert('Error Registering. Please try again.');
			});
	};

	render() {
		const { classes } = this.props;

		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
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
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Sign Up
						</Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Link href="/landing" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				{/* <Box mt={5}>
					<Copyright />
				</Box> */}
			</Container>
		);
	}
}

SignUp.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
