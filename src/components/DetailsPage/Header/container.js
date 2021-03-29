import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../../store/actions'

class Header extends Component {
  handleDelete = () => {
    const payload = {
      id: this.props.match.params.id,
      history: this.props.history
    }

    this.props.deleteRepository(payload)
  }

  render() {
    return (
      <Row>
        <Col md={2}></Col>
        <Col md={8} className='text-center'>
          <h5>{this.props.repository.full_name}</h5>
        </Col>
        <Col md={2} className='text-right'>
          <Button variant='light' onClick={this.handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Col>
      </Row>
    )
  }
}

Header.propTypes = {
  repository: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    deleteRepository: (id) => dispatch(actions.deleteRepository(id))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Header))