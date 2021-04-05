import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const HeaderComponent = () => (
  <Row>
    <Col md={2}></Col>
    <Col md={8} className='text-center'>
      <h5>{'Github Stargazer'}</h5>
    </Col>
    <Col md={2} className='text-right'>
      <Link to='/new'>
        <Button variant='light'>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Link>
    </Col>
  </Row>
)

export default HeaderComponent
