import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import Header from './Header'
import Content from './Content'
import Layout from '../UI/Layout'

const AddRepositoryPage = ({ history }) => {
  return (
    <Layout 
      header={<Header />} 
      body={<Content history={history} />} />
  )
}

AddRepositoryPage.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(AddRepositoryPage)
