import React, { Component } from "react";
import {
  Container,
  Col,
  Card,
  Form,
  Button
} from "react-bootstrap";
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/actions';

class Body extends Component {
  render() {
    return (
      <Card.Body>
        <Container fluid>
          <Col md={{ span: 8, offset: 2 }}>
            <Form onSubmit={this.props.handleSubmit}>
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
}

const mapStateToProps = state => {
  return {
    error: state.new.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (event) => dispatch(actions.searchRepository(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)