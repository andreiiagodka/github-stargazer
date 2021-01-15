import React, { Component, Fragment } from "react";
import {
  Card
} from "react-bootstrap";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Card.Header>
          <strong>Github Stargazer</strong>
        </Card.Header>
        <Card.Body>
          <h1>Body</h1>
        </Card.Body>
      </Fragment>
    )
  }
}

export default Index