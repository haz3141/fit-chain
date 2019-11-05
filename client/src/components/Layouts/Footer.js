import React from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';

// className={classes.root} // onChange={handleChange}

export default (props) => (
	<Paper >
		<Tabs  value={2} indicatorColor="primary" textColor="primary" centered>
			<Tab label="Item One" />
			<Tab label="Item Two" />
			<Tab label="Item Three" />
		</Tabs>
	</Paper>
);
