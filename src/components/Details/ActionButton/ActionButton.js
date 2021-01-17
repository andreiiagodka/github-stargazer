import React from 'react'
import { Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const actionButton = props => (
  <Button variant='light' onClick={props.handleDelete}>
    <FontAwesomeIcon icon={faTrash} />
  </Button>
)

export default actionButton