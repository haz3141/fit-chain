// Import Components
import React, { Component } from 'react';
// , Fragment
import { Link } from 'react-router-dom';



class Links extends Component {
	render() {
		return (
			<React.Fragment>
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
          <Link to="/secret">Secret</Link>
					<Link to="/dashboard">Dashboard</Link>
					{/* <Link to="/signup">Sign Up!</Link> */}
					{/* <Link to="/landing">Landing</Link> */}
			</React.Fragment>
		);
	}
}

export { Links };

