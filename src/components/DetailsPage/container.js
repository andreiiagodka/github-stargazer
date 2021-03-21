import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchRepositoryActions } from '../../store/actions'

import Header from './Header'
import Content from './Content'
import Error from '../UI/Error'
import Layout from '../UI/Layout'
import Spinner from '../UI/Spinner'

class DetailsPage extends Component {
  componentDidMount() {
    this.props.fetchRepository(this.props.match.params.id)
  }
  
  render() {
    let content = <Spinner />
    if (this.props.error) {
      content = <Error />
    }
    if (!this.props.error && !this.props.loading) {
      content = (
        <Layout 
          header={<Header repository={this.props.repository}/>} 
          body={<Content repository={this.props.repository} />} />
      )
    }

    return content
  }
}

DetailsPage.propTypes = {
  repository: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  fetchRepository: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    repository: state.fetchRepository.repository,
    loading: state.fetchRepository.loading,
    error: state.fetchRepository.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRepository: (id) => dispatch(fetchRepositoryActions.fetchRepository(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsPage))