import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Container,
  Col
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
      <Container fluid>
        <Col md={{ span: 4, offset: 4 }}>
          {routes}
        </Col>
      </Container>
    )
  }
}

export default App;
