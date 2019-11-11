import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Custom components
import DialogBox from '../components/DialogBox';

// Import Material-UI Components
import { withStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import RestoreIcon from '@material-ui/icons/Restore';

const styles = (theme) => ({
	root: {
		width: 500
	}
});

class Footer extends Component {
	state = {
		navValue: 0
	};

	handleClick = (event) => ({ target: { value }}) => {
		console.log({value})
		// let value = value
		this.setState({ navValue: value });
	};

	render() {
		// const [ value, setState ] = React.useState(0);
		const { classes } = this.props;

		return (
			<BottomNavigation showLabels className={classes.root}>
				{/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
				<BottomNavigationAction onClick={this.handleClick} value={0} label="Create" icon={<DialogBox />} />
				<BottomNavigationAction onClick={this.handleClick} value={1} label="Favorites" icon={<FavoriteIcon />} />
				<BottomNavigationAction onClick={this.handleClick} value={2} label="Nearby" icon={<LocationOnIcon />} />
			</BottomNavigation>
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
