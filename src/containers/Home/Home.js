import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actions';

import Spinner from '../../components/UI/Spinner/Spinner';
import Header from '../../components/UI/Header/Header';
import ActionButton from '../../components/Home/ActionButton/ActionButton';
import Repositories from '../../components/Home/Repositories/Repositories';

class Home extends Component {
  componentDidMount() {
    this.props.fetchRepositories()
  }

  render() {
    let content = <Spinner />
    if (!this.props.loading) {
      content = (
        <Fragment>
          <Card.Header>
            <Header title='Github Stargazer' actionButton={<ActionButton />} />
          </Card.Header>
          <Card.Body>
            <Repositories repositories={this.props.repositories} />
          </Card.Body>
        </Fragment>
      )
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