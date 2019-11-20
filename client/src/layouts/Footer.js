import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Custom components
import DialogBox from '../components/DialogBox';

// Import Material-UI Components
import { withStyles, Container, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	container: {
		height: '3vh'
	},
	appBar: {
		borderRadius: 10,
		position: "fixed",
		bottom: "4vh",
		width: "25%"
	}
});

class Footer extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Container className={classes.container}>
				<div className={classes.root}>
					<Grid container item justify="center">
						
							<AppBar className={classes.appBar} position="static" align="center">
								<Toolbar>
									<Typography variant="h6" className={classes.title}>
										<DialogBox />
										Create Activity
									</Typography>
								</Toolbar>
							</AppBar>
						
					</Grid>
				</div>
			</Container>
		);
	}
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
