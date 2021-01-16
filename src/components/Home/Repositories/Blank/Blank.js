import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const blank = props => (
  <Row>
    <Col md={12} className='text-center'>
      <p className='lead'>No repositories added</p>
    </Col>
  </Row>
)

export default blank