import React, { Component } from "react";
import {
  Form,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";

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
          type='submit'
          variant='outline-dark'
        >
          Add
        </Button>
      </Form>
    )
  }
}

export default SearchForm