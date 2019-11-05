// Import Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import Components
import { Home } from './components/Home';
import { Login } from './components/Login';
import { withAuth } from './components/withAuth';
import SignInSide from './pages/SignInSide';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard/index';
// import Secret from './components/Secret';
import { Landing } from './components/Landing'

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
			</Router>
		);
	}
}

export { App };

/* <li>
	<Link to="/secret">Secret</Link>
</li>; 
<Route path="/secret" component={withAuth(Secret)} />
*/
