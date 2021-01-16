import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const actionButton = props => (
  <Link to='/new'>
    <Button variant='light'>Add</Button>
  </Link>
)

export default actionButton