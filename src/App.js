import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Col, Card } from 'react-bootstrap'

import HomePageContainer from './components/HomePage'
import AddRepositoryPage from './components/AddRepositoryPage'
import DetailsPageContainer from './components/DetailsPage'

const App = () => {
  const routes = (
    <Router>
      <Switch>
        <Route exact path='/new'>
          <AddRepositoryPage />
        </Route>
        <Route exact path='/details/:id'>
          <DetailsPageContainer />
        </Route>
        <Route exact path='/'>
          <HomePageContainer />
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
