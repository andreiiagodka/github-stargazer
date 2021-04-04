import React from 'react'

import { Row, Col } from 'react-bootstrap'

const BlankComponent = () => (
  <Row>
    <Col md={12} className='text-center'>
      <p className='lead'>No repositories added</p>
    </Col>
  </Row>
)

export default BlankComponent