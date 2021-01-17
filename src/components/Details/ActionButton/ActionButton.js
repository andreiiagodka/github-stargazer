import React from 'react'
import { Button } from 'react-bootstrap'

const actionButton = props => (
  <Button variant='light' onClick={props.handleDelete}>
    Delete
  </Button>
)

export default actionButton