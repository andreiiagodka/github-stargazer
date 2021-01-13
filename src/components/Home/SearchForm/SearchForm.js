import React, { Component } from "react";
import {
  Form,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class SearchForm extends Component {
  render() {
    return (
      <Form inline onSubmit={this.props.handleSubmit}>
        <Form.Control
          className='col-md-9 mr-4'
          name='name'
          id='name'
          placeholder='Enter repository name, e.g. rubygarage/truemail'
        />
        <Button type='submit' variant='outline-dark'>
          Add
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (event) => dispatch(actions.searchRepository(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)