import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Row, Container } from 'react-bootstrap'

const Body = ({ repository }) => {
  const mappedLanguages = Object.keys(repository.languages).map(key => {
    return <li key={key}>{key}: {repository.languages[key]}</li>
  })

  return (
    <Fragment>
      <Container>
        <Row>
          <h3>Stats</h3>
        </Row>
        <Row>
          <ul style={{ listStyleType: "none" }}>
            <li>Stars: {repository.stargazers_count}</li>
            <li>Watchers: {repository.watchers_count}</li>
            <li>Forks: {repository.forks_count}</li>
          </ul>
        </Row>
      </Container>
      <Container>
        <Row>
          <h3>Languages</h3>
        </Row>
        <Row>
          <ul style={{ listStyleType: "none" }}>
            {mappedLanguages}
          </ul>
        </Row>
      </Container>
    </Fragment>
  )
}

Body.propTypes = {
  repository: PropTypes.object.isRequired
}

export default Body