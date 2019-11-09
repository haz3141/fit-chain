import React, { Component, Fragment } from "react";

import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Import Layouts
import { Header } from "../layouts/Header";
import { Body } from "../layouts/Body";
import { Footer } from "../layouts/Footer";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Container fullWidth={true} style={{padding: 0}}>
          {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
          <Header />
          <Body />
          <Footer />
        </Container>
      </Fragment>
    );
  }
}

export { Dashboard };
