import React from 'react'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ActionButton = () => (
  <Link to='/new'>
    <Button variant='light'>
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  </Link>
)

export default ActionButton