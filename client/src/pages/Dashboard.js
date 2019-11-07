import React, { Component, Fragment } from "react";

// Import Layouts
import { Header } from "../layouts/Header";
import { Body } from "../layouts/Body";
import { Footer } from "../layouts/Footer";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
    );
  }
}

export { Dashboard };
