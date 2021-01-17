import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";

const repository = props => (
  <Link to={'/details/' + props.id}>
    <ListGroup.Item action>
      <Row>
        <Col md={7}>{props.name}</Col>
        <Col md={5} className='text-right'>{props.stars}</Col>
      </Row>
    </ListGroup.Item>
  </Link>
)

export default repository