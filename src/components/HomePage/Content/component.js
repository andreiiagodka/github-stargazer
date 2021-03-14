import React from 'react'
import PropTypes from 'prop-types'

import { ListGroup } from 'react-bootstrap'

import Repository from './Repository'
import Blank from './Blank'

const Content = ({ repositories }) => {
  const fetchedRepositories = repositories.map(repository => {
    return (
      <Repository
        key={repository.id} 
        id={repository.id}
        name={repository.full_name}
        stars={repository.stargazers_count} />
    )
  })

  return ( repositories.length ? <ListGroup>{fetchedRepositories}</ListGroup> : <Blank /> )
}

Content.propTypes = {
  repositories: PropTypes.array
}

export default Content