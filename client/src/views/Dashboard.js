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
				<Container maxWidth="lg" style={{ padding: 0, backgroundColor: '#cfe8fc' }}>
					<Header />
					<Body />
					<Footer />
				</Container>
			</Fragment>
		);
	}
}

export { Dashboard };
