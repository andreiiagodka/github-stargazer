import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../store/actions/actions'

import Spinner from '../../components/UI/Spinner/Spinner'
import Error from '../../components/UI/Error/Error'
import Layout from '../../components/UI/Layout/Layout'
import Header from '../../components/UI/Header/Header'
import ActionButton from '../../components/Details/ActionButton/ActionButton'
import Body from '../../components/Details/Body/Body'

class Details extends Component {
  componentDidMount() {
    this.props.fetchRepository(this.props.match.params.id)
  }
  
  render() {
    let content = <Spinner />
    if (this.props.error) {
      content = <Error />
    }
    if (!this.props.error && !this.props.loading) {
      const header = (
        <Header 
          title={this.props.repository.full_name} 
          actionButton={<ActionButton id={this.props.repository.id} history={this.props.history} />} 
        />
      )
      const body = <Body repository={this.props.repository} />

      content = <Layout header={header} body={body} />
    }

    return content
  }
}

Details.propTypes = {
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
    fetchRepository: (id) => dispatch(actions.fetchRepository(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details))