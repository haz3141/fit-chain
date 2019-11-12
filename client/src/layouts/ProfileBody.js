import React from 'react';
import { Grid } from '@material-ui/core';
import UserActions from '../components/UserActions';

const ProfileBody = () => (
	<Grid container direction="row" justify="center" alignItems="center">
		<Grid container item sm>
			<UserActions />
		</Grid>
	</Grid>
);

export { ProfileBody };