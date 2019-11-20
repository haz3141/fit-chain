import React, { Component, Fragment } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// Import Layouts
import { Header } from '../layouts/Header';
import Body from '../layouts/Body';
import Footer from '../layouts/Footer';

class Dashboard extends Component {
	render() {
		return (
			<Fragment>
				<CssBaseline />
				<Container maxWidth="xl" style={{ padding: 0 }}>
					<Header />
					<Body />
					<Footer />
				</Container>
			</Fragment>
		);
	}
}

export { Dashboard };
