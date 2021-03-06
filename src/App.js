import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Col, Card } from 'react-bootstrap'

import Home from './containers/Home/Home'
import Details from './containers/Details/Details'
import AddRepository from './components/AddRepository/AddRepository'

const App = () => {
  const routes = (
    <Router>
      <Switch>
        <Route exact path='/new'>
          <AddRepository />
        </Route>
        <Route exact path='/details/:id'>
          <Details />
        </Route>
        <Route exact path='/'>
          <Home />
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

export default App
