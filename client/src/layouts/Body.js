import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from '@material-ui/core';
import { ListItem, ListItemText } from '@material-ui/core';
// FormRow,
// , ListItemLink
// <ListItemLink href="#simple-list">
//     <ListItemText primary="Spam" />
// </ListItemLink>

const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		height: 500,
		overflowY: 'auto'
	}
};

const Body = () => (
	<Grid container direction="row" justify="center" alignItems="center">
		<Grid container item>
      <h1>Grid</h1>
		</Grid>
	</Grid>
);

export { Body };