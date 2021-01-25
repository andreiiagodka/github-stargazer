import React from 'react'

import { ListGroup } from 'react-bootstrap'

import Blank from './Blank/Blank'
import Repository from './Repository/Repository'

const Repositories = props => {
  const fetchedRepositories = props.repositories.map(repository => {
    return (
      <Repository
        key={repository.id} 
        id={repository.id}
        name={repository.full_name}
        stars={repository.stargazers_count} />
    )
  })

  return ( props.repositories.length ? <ListGroup>{fetchedRepositories}</ListGroup> : <Blank /> )
}

export default Repositories