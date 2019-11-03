import React, { Component } from "react";

export default class Secret extends Component {
  constructor() {
    super();
    // Sets Default Message
    this.state = {
      message: "Loading..."
    }
  }

  componentDidMount() {
    // GET Message from Server Using Fetch API
    fetch("/api/secret")
      .then(res => res.text())
      .then(res => this.setState({
        message: res
      }));
  }

  render() {
    return (
      <div>
        <h1>Secret</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
