// Import Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import Components
import { Home } from './components/Home';
import Secret from './components/Secret';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard/index';
import { Login } from './components/Login';
import { WithAuth } from './components/WithAuth';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/secret">Secret</Link>
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
						<Route path="/signup" component={SignUp} />
						<Route path="/login" component={Login} />
						<Route path="/dashboard" component={WithAuth(Dashboard)} />
						<Route path="/secret" component={WithAuth(Secret)} />
						<Route path="/api/register" component={SignIn} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export { App };
