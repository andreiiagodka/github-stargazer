import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'

const RepositoryComponent = ({ id, name, stars }) => (
  <Link to={'/details/' + id}>
    <ListGroup.Item action>
      <Row>
        <Col md={7}>{name}</Col>
        <Col md={5} className='text-right'>{stars}</Col>
      </Row>
    </ListGroup.Item>
  </Link>
)

RepositoryComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

export default RepositoryComponent