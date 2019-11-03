// Import Dependencies
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Secret from "./Secret";

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
        </ul>
        
        <Switch>
          <Route path="/" exact Component={Home} />
          <Route path="/secret" Component={Secret} />
        </Switch>
      </div>
    );
  }
}
