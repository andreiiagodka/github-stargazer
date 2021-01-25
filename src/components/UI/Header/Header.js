import React from 'react'

import { Row, Col } from 'react-bootstrap'

const Header = props => (
  <Row>
    <Col md={2}></Col>
    <Col md={8} className='text-center'>
      <h5>{props.title}</h5>
    </Col>
    <Col md={2} className='text-right'>
      {props.actionButton}
    </Col>
  </Row>
)

export default Header