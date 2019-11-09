// Import React Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// Import Pages
import { Login } from "../views/Login";
import { Secret } from "../views/Secret";
import { Dashboard } from "../views/Dashboard";
import { Exercise } from "../views/Exercise/Exercise";
import Landing from "../views/Landing"
import SignUp from "../views/SignUp"

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
                <Route path="/secret" component={withAuth(Secret)} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={withAuth(Dashboard)} />
                <Route path="/exercise" component={Exercise} />
                <Route path="/landing" component={Landing} />
                <Route path="/signup" component={SignUp} />
              </Switch>
						</React.Fragment>
				</div>
      </Router>
    );
  }
}

// Export App
export { App };
