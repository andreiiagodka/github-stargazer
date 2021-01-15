import React from "react";
import { Card } from "react-bootstrap";

const header = props => (
  <Card.Header>
    <strong>{props.title}</strong>
  </Card.Header>
)

export default header