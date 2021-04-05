import React from 'react'

import { Container, Col } from 'react-bootstrap'

import AddRepositoryForm from './AddRepositoryForm'

const ContentComponent = () => {
  return (
    <Container fluid>
      <Col md={{ span: 8, offset: 2 }}>
        <AddRepositoryForm />
      </Col>
    </Container>
  )
}

export default ContentComponent
