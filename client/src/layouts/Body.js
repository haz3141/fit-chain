import React from 'react';
import { Grid } from '@material-ui/core';
import DialogBox from '../components/DialogBox';


const Body = () => (
	<Grid container direction="row" justify="center" alignItems="center">
		<Grid container item sm>
			<DialogBox />
		</Grid>
	</Grid>
);

export { Body };