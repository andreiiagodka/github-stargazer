import React, { Component } from "react";
import {
  Row,
  Col
} from "react-bootstrap";

import SearchForm from './SearchForm/SearchForm';
class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <SearchForm />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home