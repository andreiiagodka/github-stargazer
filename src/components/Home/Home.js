import React, { Component } from "react";
import {
  Row,
  Col
} from "react-bootstrap";

import SearchForm from './SearchForm/SearchForm';
import SearchTable from './SearchTable/SearchTable';
class Home extends Component {
  render() {
    return (
      <div>
        <Row className='mt-2'>
          <Col>
            <SearchForm />
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <SearchTable />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home