import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Container
} from "react-bootstrap";
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

import * as actions from '../../store/actions/actions';
import { deleteRepository } from '../../firebase/firebase'

import Header from '../../components/UI/Header/Header';
import Spinner from '../../components/UI/Spinner/Spinner';
import ActionButton from '../../components/Details/ActionButton/ActionButton';
import CollectionList from '../../components/Details/CollectionList/CollectionList';

class Show extends Component {
  componentDidMount() {
    this.props.getRepository(this.props.match.params.id)
  }

  handleDelete = (id) => {
    deleteRepository(id)
    this.props.history.push('/')
  }

  render() {
    let content = <Spinner />
    if (!this.props.loading) {
      const actionButton = <ActionButton handleDelete={() => this.handleDelete(this.props.repository.id)} />

      content = (
        <Fragment>
          <Card.Header>
            <Header title={this.props.repository.full_name} actionButton={actionButton} />
          </Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <h3>Stats</h3>
              </Row>
              <Row>
                <ul style={{ listStyleType: "none" }}>
                  <li>Stars: {this.props.repository.stargazers_count}</li>
                  <li>Watchers: {this.props.repository.watchers_count}</li>
                  <li>Forks: {this.props.repository.forks_count}</li>
                </ul>
              </Row>
            </Container>
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
    loading: state.getRepository.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRepository: (id) => dispatch(actions.getRepository(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Show))