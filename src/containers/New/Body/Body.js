import React, { Component } from "react";
import {
  Container,
  Col,
  Card,
  Form,
  Button
} from "react-bootstrap";
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/actions';

class Body extends Component {
  submitHandler = event => {
    event.preventDefault()

    this.props.searchRepository(event.target.elements.name.value)
  }

  render() {
    let body = <Redirect to='/' />
    if (!this.props.success) {
      body = (
        <Card.Body>
          <Container fluid>
            <Col md={{ span: 8, offset: 2 }}>
              <Form onSubmit={this.submitHandler}>
                <Form.Group>
                  <Form.Control
                    id='name'
                    name='name'
                    placeholder='Enter repository name, e.g. rubygarage/truemail'
                  />
                  <Form.Text className="text-danger">{this.props.error}</Form.Text>
                </Form.Group>
                <Button type='submit' variant='primary' size='lg' block>
                  Add
                </Button>
              </Form>
            </Col>
          </Container>        
        </Card.Body>
      )
    }

    return body
  }
}

const mapStateToProps = state => {
  return {
    success: state.new.success,
    error: state.new.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchRepository: (name) => dispatch(actions.searchRepository(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)