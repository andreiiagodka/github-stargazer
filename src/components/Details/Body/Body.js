import React, { Fragment } from 'react'

import { Row, Container } from 'react-bootstrap'

const Body = props => {
  const mappedLanguages = Object.keys(props.repository.languages).map(key => {
    return <li>{key}: {props.repository.languages[key]}</li>
  })

  return (
    <Fragment>
      <Container>
        <Row>
          <h3>Stats</h3>
        </Row>
        <Row>
          <ul style={{ listStyleType: "none" }}>
            <li>Stars: {props.repository.stargazers_count}</li>
            <li>Watchers: {props.repository.watchers_count}</li>
            <li>Forks: {props.repository.forks_count}</li>
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

export default Body