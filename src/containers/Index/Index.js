import React, { Component, Fragment } from "react";
import {
  Card,
  ListGroup,
  Col,
  Container,
  Row
} from "react-bootstrap";
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actions';

import Spinner from '../../components/UI/Spinner/Spinner';

class Index extends Component {
  componentDidMount() {
    this.props.fetchRepositories()
  }

  render() {
    let repositories = <Spinner />
    if (!this.props.loading) {
      repositories = this.props.repositories.map(repository => {
        return (
          <ListGroup.Item>
            <Row>
              <Col md={7}>{repository.name}</Col>
              <Col md={5} className='text-right'>{repository.stargazers_count}</Col>
            </Row>
          </ListGroup.Item>
        )
      })
    }

    return (
      <Fragment>
        <Card.Header>
          <strong>Github Stargazer</strong>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {repositories}
          </ListGroup>
        </Card.Body>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.index.repositories,
    loading: state.index.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRepositories: () => dispatch(actions.fetchRepositories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)