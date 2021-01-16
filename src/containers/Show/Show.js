import React, { Component, Fragment } from "react";
import {
  Card
} from "react-bootstrap";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actions from '../../store/actions/actions';

import Spinner from '../../components/UI/Spinner/Spinner';

class Show extends Component {
  componentDidMount() {
    this.props.showRepository(this.props.match.params.id)
  }

  render() {
    let body = <Spinner />
    if (this.props.repository) {
      const stats = Object.keys(this.props.repository.stats).map(key => {
        return <li>{key.replace('_count', '')}: {this.props.repository.stats[key]}</li>
      })

      const languages = Object.keys(this.props.repository.languages).map(key => {
        return <li>{key}: {this.props.repository.languages[key]}</li>
      })

      body = (
        <Fragment>
          <h2>Stats</h2>
            <ul style={{ listStyleType: "none" }}>
              {stats}
            </ul>
          <h2>Languages</h2>
            <ul style={{ listStyleType: "none" }}>
              {languages}
            </ul>
        </Fragment>
      )
    }
    return (
      <Fragment>
        <Card.Header>
          <strong>{this.props.repository ? this.props.repository.name : 'Details'}</strong>
        </Card.Header>
        <Card.Body>
          {body}
        </Card.Body>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    repository: state.show.repository,
    loading: state.show.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showRepository: (id) => dispatch(actions.showRepository(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Show))