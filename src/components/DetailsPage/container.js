import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../store/actions'
import { selectRepository, selectLoading, selectError } from '../../store/selectors/fetchRepositorySelector'

import HeaderContainer from './Header'
import ContentComponent from './Content'
import ErrorComponent from '../UI/Error'
import LayoutComponent from '../UI/Layout'
import SpinnerComponent from '../UI/Spinner'

class DetailsPageContainer extends Component {
  componentDidMount() {
    this.props.fetchRepository(this.props.match.params.id)
  }
  
  render() {
    let content = <SpinnerComponent />
    if (this.props.error) {
      return <ErrorComponent />
    }
    if (!this.props.error && !this.props.loading) {
      content = (
        <LayoutComponent 
          header={<HeaderContainer repository={this.props.repository} />} 
          body={<ContentComponent repository={this.props.repository} />} />
      )
    }

    return content
  }
}

DetailsPageContainer.propTypes = {
  repository: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  fetchRepository: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    repository: selectRepository(state),
    loading: selectLoading(state),
    error: selectError(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRepository: (id) => dispatch(actions.fetchRepository(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsPageContainer))