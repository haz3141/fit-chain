import React from "react";

// Import Material-UI Components
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

// Import Local Components
import { ButtonLinks } from "../components/ButtonLinks";
import { ExerciseCreate } from "../components/ExerciseCreate";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ flex: 1 }} >Workout Nav Bar</Typography>
        <ButtonLinks />
        <ExerciseCreate />
      </Toolbar>
	</AppBar>
  );
};

export { Header };

