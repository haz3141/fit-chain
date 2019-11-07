// Import React Modules
import React from "react";

// Import Material-UI Components
import { AppBar, Toolbar, Typography  } from '@material-ui/core';

// Import Local Components
import { ButtonLinks } from "../components/ButtonLinks";
import { ExerciseCreate } from "../components/ExerciseCreate";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{ flex: 1 }} >Workout Nav Bar</Typography>
        <ButtonLinks />
        <ExerciseCreate />
      </Toolbar>
	</AppBar>
  );
};

export { Header };

