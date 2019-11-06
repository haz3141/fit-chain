import { Grid, Paper, Typography } from '@material-ui/core';
// , List
import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';

class CustomPage extends Component {
	constructor() {
		super();
		// Sets Default Message
		this.state = {
			message: 'Loading...CustomPage'
		};
	}

	componentDidMount() {
		// GET Message from Server Using Fetch API test
		fetch('/api/landing').then((res) => res.text()).then((res) =>
			this.setState({
				message: res
			})
		);
	}

	render() {
		const styles = {
			Paper: {
				padding: 20,
				marginTop: 10,
				marginBottom: 10,
				height: 500
			}
		};
		return (
			<div>
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid container item sm>
						<Paper style={styles.Paper}>
							<Typography variant="h2">Title Custom page</Typography>
							<Typography variant="subtitle1" color="textSecondary" style={{ marginTop: 20 }}>
								Subtitle Custom page
							</Typography>
						</Paper>
					</Grid>

					<Grid container item sm>
						<Paper style={styles.Paper}>
							<Typography variant="h2">Title right</Typography>
							<Typography variant="subtitle1" color="textSecondary" style={{ marginTop: 20 }}>
								Subtitle Custom page
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export { CustomPage };

// className={classes.submit}
