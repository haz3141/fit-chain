// Import Dependencies
import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Links } from './Links'

import { Header, Footer } from './Layouts';
import Exercies from './Exercises';

class App extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<Header />
					<Exercies />
					<Footer />
				</Fragment>
				<Router>
					<Links/>
				</Router>
			</div>
		);
	}
}

export { App };

/* <li>
	<Link to="/secret">Secret</Link>
</li>; 
<Route path="/secret" component={withAuth(Secret)} />
*/
