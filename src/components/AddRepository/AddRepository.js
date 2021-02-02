import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import Layout from '../UI/Layout/Layout'
import Header from '../UI/Header/Header'
import Body from './Body/Body'

import { getRepositoryData } from '../../shared/github'
import { createRepository } from '../../shared/firebase'

const AddRepository = ({ history }) => {
  const header = <Header title='Add Repository' />
  const body = <Body 
    getRepositoryData={getRepositoryData} 
    createRepository={createRepository}
    history={history} />
    
  return <Layout header={header} body={body} />
}

Body.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(AddRepository)
