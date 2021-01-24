import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { withRouter } from 'react-router'

import Header from '../../components/UI/Header/Header'
import Form from '../../components/AddRepository/Form/Form'

class AddRepository extends Component {
  render() {
    return (
      <Fragment>
        <Card.Header>
          <Header title='Add Repository' />
        </Card.Header>
        <Card.Body>
          <Form history={this.props.history} />
        </Card.Body>
      </Fragment>
    )
  }
}

export default withRouter(AddRepository)