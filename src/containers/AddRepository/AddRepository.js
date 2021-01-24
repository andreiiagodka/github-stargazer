import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'

import Header from '../../components/UI/Header/Header'
import Layout from '../../components/UI/Layout/Layout'
import Form from '../../components/AddRepository/Form/Form'

class AddRepository extends Component {
  render() {
    const header = <Header title='Add Repository' />
    const body = <Form history={this.props.history} />
    
    return <Layout header={header} body={body} />
  }
}

export default withRouter(AddRepository)