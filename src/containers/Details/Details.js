import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

import * as actions from '../../store/actions/actions';

import Header from '../../components/UI/Header/Header';
import Spinner from '../../components/UI/Spinner/Spinner';
import ActionButton from '../../components/Details/ActionButton/ActionButton';
import CollectionList from '../../components/Details/CollectionList/CollectionList';

class Show extends Component {
  componentDidMount() {
    this.props.getRepository(this.props.match.params.id)
  }

  handleDelete = (id) => {
    this.props.deleteRepository(id)
  }

  render() {
    if (this.props.redirectTo) {
      return <Redirect to={this.props.redirectTo} />
    }

    let content = <Spinner />
    if (!this.props.loading) {
      const actionButton = <ActionButton handleDelete={() => this.handleDelete(this.props.repository.id)} />

      content = (
        <Fragment>
          <Card.Header>
            <Header title={this.props.repository.name} actionButton={actionButton} />
          </Card.Header>
          <Card.Body>
            <CollectionList 
              title='Stats'
              collection={this.props.repository.stats} />
            <CollectionList 
              title='Languages'
              collection={this.props.repository.languages} />
          </Card.Body>
        </Fragment>
      )
    }

    return content
  }
}

const mapStateToProps = state => {
  return {
    repository: state.getRepository.repository,
    loading: state.getRepository.loading,
    redirectTo: state.deleteRepository.redirectTo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRepository: (id) => dispatch(actions.getRepository(id)),
    deleteRepository: (id) => dispatch(actions.deleteRepository(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Show))