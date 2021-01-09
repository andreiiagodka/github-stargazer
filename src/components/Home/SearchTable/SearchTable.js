import React, { Component } from "react";
import {
  Table
} from "react-bootstrap";

class SearchTable extends Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Repository name</th>
            <th>Stars</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>vue/vue.js</td>
            <td>1000</td>
            <td>x</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default SearchTable