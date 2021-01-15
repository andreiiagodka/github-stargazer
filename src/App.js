import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Container,
  Col,
  Card
} from "react-bootstrap";

import Index from './containers/Index/Index';
import Show from './containers/Show/Show';
import New from './components/New/New';

class App extends Component {
  render() {
    let routes = (
      <Router>
        <Switch>
          <Route path='/new'>
            <New />
          </Route>
          <Route path='/show'>
            <Show />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    )

    return (
      <Container fluid>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            {routes}
          </Card>
        </Col>
      </Container>
    )
  }
}

export default App;
