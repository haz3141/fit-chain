// Import Dependencies
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Import Components
import { Home } from "./components/Home";
import Secret from "./components/Secret";
import { Login } from "./components/Login";
import { withAuth } from "./components/withAuth";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/secret">Secret</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/secret" component={withAuth(Secret)} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App };
