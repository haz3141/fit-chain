import React, { Component } from "react";

import { Links } from "../components/Links"

class Home extends Component {
  constructor() {
    super();
    // Sets Default Message
    this.state = {
      message: "Loading..."
    }
  }

  componentDidMount() {
    // GET Message from Server Using Fetch API
    fetch("/api/home")
      .then(res => res.text())
      .then(res => this.setState({
        message: res
      }));
  }

  render() {
    return (
      <div>
        <Links />
        <h1>Home</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export { Home };