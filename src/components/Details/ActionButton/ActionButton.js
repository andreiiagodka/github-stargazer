import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { deleteRepository } from '../../../shared/firebase'

const ActionButton = ({ id, history }) => {
  const handleDelete = () => {
    deleteRepository(id)
    history.push('/')
  }

  return (
    <Button variant='light' onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  )
}

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

export default ActionButton