import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from 'react-bootstrap'

const Header = ({ title, actionButton }) => (
  <Row>
    <Col md={2}></Col>
    <Col md={8} className='text-center'>
      <h5>{title}</h5>
    </Col>
    <Col md={2} className='text-right'>
      {actionButton}
    </Col>
  </Row>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  actionButton: PropTypes.node
}

export default Header