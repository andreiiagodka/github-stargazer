import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Container
} from "react-bootstrap";

import Home from './components/Home/Home';
import Details from './components/Details/Details';

class App extends Component {
  render() {
    let routes = (
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

    return (
      <Container fluid className='mt-2'>
        {routes}
      </Container>
    )
  }
}

export default App;
