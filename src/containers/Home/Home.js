import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/actions';

import Spinner from '../../components/UI/Spinner/Spinner'
import Header from '../../components/UI/Header/Header'
import Layout from '../../components/UI/Layout/Layout'
import ActionButton from '../../components/Home/ActionButton/ActionButton'
import Repositories from '../../components/Home/Repositories/Repositories'

class Home extends Component {
  componentDidMount() {
    this.props.fetchRepositories()
  }

  render() {
    let content = <Spinner />
    if (!this.props.loading) {
      const header = <Header title='Github Stargazer' actionButton={<ActionButton />} />
      const body = <Repositories repositories={this.props.repositories} />
      
      content = <Layout header={header} body={body} />
    }

    return content
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.fetchRepositories.repositories,
    loading: state.fetchRepositories.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRepositories: () => dispatch(actions.fetchRepositories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)