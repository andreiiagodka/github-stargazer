import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

const Layout = props => (
  <Fragment>
    <Card.Header>{props.header}</Card.Header>
    <Card.Body>{props.body}</Card.Body>
  </Fragment>
)

export default Layout