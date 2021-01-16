import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const header = props => (
  <Card.Header>
    <Row>
      <Col md={2}></Col>
      <Col md={8} className='text-center'>
        <h5>{props.title}</h5>
      </Col>
      <Col md={2} className='text-right'>
        {props.actionButton}
      </Col>
    </Row>
  </Card.Header>
)

export default header