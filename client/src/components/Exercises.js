// Import React Components
import React, { Fragment } from 'react';

// Import Material-UI Components
import { Grid, Paper, Typography, List } from '@material-ui/core';
import { ListItem, ListItemText } from '@material-ui/core';

// Define Styles
const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		height: 500,
		overflowY: 'auto'
	}
}

function Exercises({
  exercises,
	category,
	onSelect,
	exercise: { id, title = 'Welcome!', description = 'Please select an exercise from the list on the left' }
}) {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid container item sm>
        <Paper style={styles.Paper}>
          {exercises.map(
            ([ group, exercises ]) =>
              !category || category === group ? (
                <Fragment key={group}>
                  <Typography variant="h4" style={{ textTransform: 'capitalize' }}>
                    {group}
                  </Typography>

                  <List component="ul" aria-label="secondary mailbox folders">
                    {exercises.map(({ id, title }) => (
                      <ListItem key={id} button onClick={() => onSelect(id)}>
                        <ListItemText primary={title} />
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
          )}
        </Paper>
      </Grid>
      <Grid container item sm>
        <Paper style={styles.Paper}>
          
          <Typography variant="h2">{title}</Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: 20 }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export { Exercises };