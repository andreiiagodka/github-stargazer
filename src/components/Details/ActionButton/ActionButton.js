import React from 'react'

import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { deleteRepository } from '../../../shared/firebase'

const ActionButton = props => {
  const handleDelete = () => {
    deleteRepository(props.id)
    props.history.push('/')
  }

  return (
    <Button variant='light' onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  )
}

export default ActionButton