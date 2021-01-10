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
      <Form inline>
        <Form.Control
          className='col-md-9 mr-4'
          name='name'
          id='name'
          placeholder='Enter repository name, e.g. rubygarage/truemail'
        />
        <Button 
          variant='outline-dark'
          onClick={this.props.onSearchSubmit}
        >
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
    onSearchSubmit: () => dispatch(actions.searchStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)