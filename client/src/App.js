import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Secret from "./components/Secret";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard/index"

class App extends Component {
  // api routes
  render() {
    return (
      <Router>
        <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/signup">Sign Up!</Link></li>
          <li><Link to="/api/register">Users</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/api/register" component={SignIn} />
          <Route path="/secret" component={Secret} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
      </Router>
    );
  }

  // Nested Routes
  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     {/* Router Example */}
  //     <Router>
  //     <div>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li>
  //           <Link to="/topics">Topics</Link>
  //         </li>
  //       </ul>

  //       <Switch>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/topics">
  //           <Topics />
  //         </Route>
  //         <Route path="/">
  //           <Home />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  //     </div>

      
  //   );
  // }
}

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  console.log(useParams());
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
