// Import React Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// Import Pages
import { Login } from "../views/Login";
import { Secret } from "../views/Secret";
import { Dashboard } from "../views/Dashboard";
import { Exercise } from "../views/Exercise/Exercise";
import SignIn from "../views/SignIn"
import SignUp from "../views/SignUp"
import About from '../views/About';

// Import Utils
import { withAuth } from "../utils/withAuth";

// Import Class Assets
import "./App.css";

// Create Class Based App Component
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
						<React.Fragment>
							<Switch>
                <Route path="/" exact component={withAuth(Dashboard)} />
                <Route path="/signin" component={SignIn} />
                <Route path="/about" component={About} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={withAuth(Dashboard)} />
                <Route path="/exercise" component={withAuth(Exercise)} />
                <Route path="/secret" component={withAuth(Secret)} />
                <Route path="/login" component={Login} />
              </Switch>
						</React.Fragment>
				</div>
      </Router>
    );
  }
}

// Export App
export { App };
