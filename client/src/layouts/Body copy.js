import React from 'react';
import { Grid } from '@material-ui/core';
import ActivityCards from '../components/ActivityCards';

const Body = () => (
	<Grid container direction="row" justify="center" alignItems="center">
		<Grid container item sm>
			<ActivityCards />
		</Grid>
	</Grid>
);

export { Body };