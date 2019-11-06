// Import React Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// Import Pages
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Secret } from "./pages/Secret";

// Import Components
import { Links } from "./components/Links";

// Import Utils
import { withAuth } from "./utils/withAuth";

// Import Class Assets
import "./App.css";

// Create Class Based App Component
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
						<React.Fragment>
							<Links />
							<Switch>
                <Route path="/" exact component={Home} />
                <Route path="/secret" component={withAuth(Secret)} />
                <Route path="/login" component={Login} />
              </Switch>
						</React.Fragment>
				</div>
      </Router>
    );
  }
}

// Export App [DESTRUCTURE]
export default App;
