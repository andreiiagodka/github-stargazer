import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import { selectFetchedRepositories, selectLoading, selectError } from '../../store/selectors/fetchRepositoriesSelector'

import SpinnerComponent from '../UI/Spinner'
import LayoutComponent from '../UI/Layout'
import ErrorComponent from '../UI/Error'
import Header from './Header'
import Content from './Content'

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchRepositories()
  }

  render() {
    let content = <SpinnerComponent />
    if (this.props.error) {
      return <ErrorComponent />
    }
    if (!this.props.error && !this.props.loading) {
      content = (
        <LayoutComponent
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
    repositories: selectFetchedRepositories(state),
    loading: selectLoading(state),
    error: selectError(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRepositories: () => dispatch(actions.fetchRepositories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)