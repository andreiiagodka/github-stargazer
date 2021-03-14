import React from 'react'

import { Row, Col } from 'react-bootstrap'

const Header = () => (
  <Row>
    <Col md={2}></Col>
    <Col md={8} className='text-center'>
      <h5>{'Add Repository'}</h5>
    </Col>
    <Col md={2}></Col>
  </Row>
)

export default Header