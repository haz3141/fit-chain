import React, { Component, Fragment } from "react";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// Import Layouts
import { Header } from "../layouts/Header";
import { ProfileBody } from "../layouts/ProfileBody";
import Footer from "../layouts/Footer";

// TODO: ? addComponentDidMount /- Render just ProfileBody conditionally -?

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Container maxWidth="lg" style={{padding: 0, backgroundColor: '#cfe8fc'}}>
          <Header />
          <ProfileBody />
          <Footer />
        </Container>
      </Fragment>
    );
  }
}

export { Profile };
