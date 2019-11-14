import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Custom components
import DialogBox from '../components/DialogBox';

// Import Material-UI Components
import { withStyles, Container, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

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
		// ,
		// positionBottom: '0'
	},
	appBar: {
		borderRadius: 10,
		position: "fixed",
		// left: "0",
		bottom: "4vh",
		width: "25%"
		// bottom: '0',
		// position: 'fixed'
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
