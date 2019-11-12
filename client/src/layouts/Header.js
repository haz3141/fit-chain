// Import React Modules
import React from "react";

// Import Material-UI Components
import { AppBar, Toolbar, Typography  } from '@material-ui/core';

// Import Local Components
import { ButtonLinks } from "../components/ButtonLinks";


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h5" color="inherit" style={{ flex: 1 }} >Fit Chain</Typography>
       <ButtonLinks />
        
      </Toolbar>
	</AppBar>
  );
};

export { Header };

