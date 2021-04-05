import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Card } from 'react-bootstrap'

const LayoutComponent = ({ header, body }) => (
  <Fragment>
    <Card.Header>{header}</Card.Header>
    <Card.Body>{body}</Card.Body>
  </Fragment>
)

LayoutComponent.propTypes = {
  header: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired
}

export default LayoutComponent
