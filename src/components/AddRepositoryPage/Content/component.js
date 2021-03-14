import React from 'react'
import PropTypes from 'prop-types'

import { Container, Col } from 'react-bootstrap'

import AddRepositoryForm from './AddRepositoryForm'

const ContentComponent = ({ history }) => {
  return (
    <Container fluid>
      <Col md={{ span: 8, offset: 2 }}>
        <AddRepositoryForm history={history} />
      </Col>
    </Container>
  )
}

ContentComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default ContentComponent
