import React from 'react'

import { withRouter } from 'react-router'

import Layout from '../UI/Layout/Layout'
import Header from '../UI/Header/Header'
import Body from './Body/Body'

const AddRepository = props => {
  const header = <Header title='Add Repository' />
  const body = <Body history={props.history} />
    
  return <Layout header={header} body={body} />
}

export default withRouter(AddRepository)
