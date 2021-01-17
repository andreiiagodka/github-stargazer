import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { Redirect} from 'react-router';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

import Spinner from '../../components/UI/Spinner/Spinner';
import Header from '../../components/UI/Header/Header'
import Form from '../../components/AddRepository/Form/Form'

class createRepository extends Component {
  submitHandler = event => {
    event.preventDefault()

    this.props.createRepository(event.target.elements.name.value)
  }

  render() {
    if (this.props.redirectTo) {
      return <Redirect to={this.props.redirectTo} />
    }

    let content = <Spinner />
    if (!this.props.loading) {
      content = (
        <Fragment>
          <Card.Header>
            <Header title='Add Repository' />
          </Card.Header>
          <Card.Body>
            <Form error={this.props.error} submitHandler={this.submitHandler} />
          </Card.Body>
        </Fragment>
      )
    }

    return content
  }
}

const mapStateToProps = state => {
  return {
    loading: state.createRepository.loading,
    error: state.createRepository.error,
    redirectTo: state.createRepository.redirectTo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRepository: (name) => dispatch(actions.createRepository(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(createRepository)