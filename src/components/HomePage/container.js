import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import * as actions from '../../store/actions'

import Spinner from '../UI/Spinner'
import Layout from '../UI/Layout'
import Error from '../UI/Error'
import Header from './Header'
import Content from './Content'

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchRepositories()
  }

  render() {
    let content = <Spinner />
    if (this.props.error) {
      content = <Error />
    }
    if (!this.props.error && !this.props.loading) {
      content = (
        <Layout 
          header={<Header />} 
          body={<Content repositories={this.props.repositories} />} />
      )
    }

    return content
  }
}

HomePage.propTypes = {
  repositories: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchRepositories: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    repositories: state.repositories,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRepositories: () => dispatch(actions.fetchRepositories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)