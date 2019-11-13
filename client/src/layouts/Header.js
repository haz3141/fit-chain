// Import React Modules
import React from 'react';

// Import Material-UI Components
import { AppBar, Toolbar } from '@material-ui/core';

// Import Local Components
import { ButtonLinks } from '../components/ButtonLinks';

const Header = () => {
  
	return (
		<AppBar position="static">
			<Toolbar>
		
				<ButtonLinks />
			</Toolbar>
		</AppBar>
	);
};

export { Header };
