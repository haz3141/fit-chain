import React, { Component } from 'react';

import { Links } from "../components/Links"

class Secret extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }

  componentDidMount() {
    fetch('/api/secret')
      .then(res => res.text())
      .then(res => this.setState({message: res}));
  }

  render() {
    return (
      <div>
        <Links />
        <h1>Secret</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export { Secret };