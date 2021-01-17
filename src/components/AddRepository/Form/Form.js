import React, { Component } from 'react'
import {
  Container,
  Col,
  Form,
  Button
} from 'react-bootstrap'

const form = props => (
  <Container fluid>
    <Col md={{ span: 8, offset: 2 }}>
      <Form onSubmit={props.submitHandler}>
        <Form.Group>
          <Form.Control
            id='name'
            name='name'
            placeholder='Enter repository name, e.g. rubygarage/truemail'
          />
          <Form.Text className="text-danger">{props.error}</Form.Text>
        </Form.Group>
        <Button type='submit' variant='primary' size='lg' block>
          Add
        </Button>
      </Form>
    </Col>
  </Container>        
)

export default form