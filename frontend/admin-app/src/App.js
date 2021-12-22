import React from "react";
import "./App.css";
// import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Signin from "./container/Signin";
import Signup from "./container/Signup";
// import { Switch } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css';
// import { Jumbotron } from 'react-bootstrap';

// import { Jumbotron } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// with the help of react router dom we make pages
