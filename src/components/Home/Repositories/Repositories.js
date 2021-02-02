import React from 'react'
import PropTypes from 'prop-types'

import { ListGroup } from 'react-bootstrap'

import Blank from './Blank/Blank'
import Repository from './Repository/Repository'

const Repositories = ({ repositories }) => {
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

Repositories.propTypes = {
  repositories: PropTypes.array
}

export default Repositories