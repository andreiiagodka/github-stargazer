import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Card } from 'react-bootstrap'

const Layout = ({ header, body }) => (
  <Fragment>
    <Card.Header>{header}</Card.Header>
    <Card.Body>{body}</Card.Body>
  </Fragment>
)

Layout.propTypes = {
  header: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired
}

export default Layout