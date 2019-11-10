import React from 'react';
import { Grid } from '@material-ui/core';
import DialogBox from '../components/DialogBox';
import Activities from '../components/Activities';

const Body = () => (
	<Grid container direction="row" justify="center" alignItems="center">
		<Grid container item sm>
			<DialogBox />
			<Activities />
		</Grid>
	</Grid>
);

export { Body };