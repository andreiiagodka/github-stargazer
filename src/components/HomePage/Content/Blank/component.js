import React from 'react'

import { Row, Col } from 'react-bootstrap'

const Blank = () => (
  <Row>
    <Col md={12} className='text-center'>
      <p className='lead'>No repositories added</p>
    </Col>
  </Row>
)

export default Blank