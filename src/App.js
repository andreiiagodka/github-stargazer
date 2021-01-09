import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import Details from './components/Details/Details';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/details'>
            <Details />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
