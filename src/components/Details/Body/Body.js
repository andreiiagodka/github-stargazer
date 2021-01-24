import React, { Fragment } from 'react'
import { Row, Container } from 'react-bootstrap'

import CollectionList from '../CollectionList/CollectionList'

const body = props => (
  <Fragment>
    <Container>
      <Row>
        <h3>Stats</h3>
      </Row>
      <Row>
        <ul style={{ listStyleType: "none" }}>
          <li>Stars: {props.repository.stargazers_count}</li>
          <li>Watchers: {props.repository.watchers_count}</li>
          <li>Forks: {props.repository.forks_count}</li>
        </ul>
      </Row>
    </Container>
    <CollectionList 
      title='Languages'
      collection={props.repository.languages} />
  </Fragment>
)

export default body