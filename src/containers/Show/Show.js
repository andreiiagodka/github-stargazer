import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import * as actions from '../../store/actions/actions';

import Header from '../../components/UI/Header/Header';
import Spinner from '../../components/UI/Spinner/Spinner';
import CollectionList from '../../components/Show/CollectionList/CollectionList';

class Show extends Component {
  componentWillMount() {
    this.props.showRepository(this.props.match.params.id)
  }

  render() {
    let content = <Spinner />

    if (this.props.deleted) {
      content = <Redirect to='/' />
    }
    if (this.props.repository && !this.props.deleted) {
      const header = (
        <Card.Header>
          <Row>
            <Col md={2}>
              <Link to='/'>
                <Button variant='light'>Home</Button>
              </Link>
            </Col>
            <Col md={8} className='text-center'>
              <p className='lead'>{this.props.repository.name}</p>
            </Col>
            <Col md={2} className='text-right'>
              <Button
                variant='light'
                onClick={ () => this.props.deleteRepository(this.props.repository.id) }
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Card.Header>
      )

      content = (
        <Fragment>
          {header}
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
    repository: state.show.repository,
    deleted: state.show.deleted,
    loading: state.show.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showRepository: (id) => dispatch(actions.showRepository(id)),
    deleteRepository: (id) => dispatch(actions.deleteRepository(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Show))