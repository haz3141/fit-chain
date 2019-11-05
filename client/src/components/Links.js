// Import Components
import React, { Component, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { withAuth } from './withAuth';
import SignInSide from '../pages/SignInSide';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard/index';
// import Secret from './components/Secret';
import { Landing } from './Landing';

class Links extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/landing">Landing</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/signup">Sign Up!</Link>
					</li>
					<li>
						<Link to="/api/register">Users</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
				</ul>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/landing" exact component={Landing} />
					<Route path="/signup" component={SignUp} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" component={withAuth(Dashboard)} />
					<Route path="/api/register" component={SignInSide} />
				</Switch>
			</div>
		);
	}
}

export { Links }