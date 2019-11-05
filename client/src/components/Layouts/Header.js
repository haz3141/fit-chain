import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Links } from '../Links'

// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon  from '@material-ui/icons/MenuIcon'
// <IconButton edge="start"  color="inherit" aria-label="menu">
// 	  <MenuIcon />
// </IconButton>

// Need to add styles => function
// className={classes.menuButton} className={classes.title}

export default (props) => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="h6">Bars Bars Bars</Typography>
			<Button color="primary">Login</Button>
			<Router>
				<Links />
			</Router>
		</Toolbar>
	</AppBar>
);
