import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Custom components
import DialogBox from '../components/DialogBox';

// Import Material-UI Components
import { withStyles, Container } from '@material-ui/core';
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
		height: 100
	},
	appBar: {
		borderRadius: 10
	}
});

class Footer extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Container className={classes.container} maxWidth="sm">
				<div className={classes.root}>
					<AppBar className={classes.appBar} position="static" align="center">
						<Toolbar>
							<Typography variant="h6" className={classes.title}>
								<DialogBox />
								Create Activity
							</Typography>
							{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton> */}
						</Toolbar>
					</AppBar>
				</div>
			</Container>
		);
	}
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);

// =

// ===

// ===== END

// const index = category ? muscles.findIndex((group) => group === category) + 1 : 0;
// const onIndexSelect = (e, index) => {
// 	onSelect(index === 0 ? '' : muscles[index - 1]);
// }
// <Paper>
// 	<Tabs
// 		value={0}
// onChange={onIndexSelect}
// indicatorColor="primary"
// textColor="primary"
// centered
// 	>
// 		<Tab label="All" />
// 		{/* {muscles.map((group) => <Tab key={group} label={group} />)} */}
// 	</Tabs>
// </Paper>
