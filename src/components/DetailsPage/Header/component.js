import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { deleteRepository } from '../../../shared/firebase'

const Header = ({ repository, history }) => {
  const handleDelete = () => {
    deleteRepository(repository.id)
    history.push('/')
  }

  return (
    <Row>
      <Col md={2}></Col>
      <Col md={8} className='text-center'>
        <h5>{repository.full_name}</h5>
      </Col>
      <Col md={2} className='text-right'>
        <Button variant='light' onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Col>
    </Row>
  )
}

Header.propTypes = {
  repository: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Header