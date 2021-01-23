import React from 'react'
import { ListGroup } from 'react-bootstrap'

import Blank from './Blank/Blank'
import Repository from './Repository/Repository'

const repositories = props => {
  const fetchedRepositories = props.repositories.map(repository => {
    return (
      <Repository 
        id={repository.id}
        name={repository.full_name}
        stars={repository.stargazers_count} />
    )
  })

  let content = null
  if (fetchedRepositories.length) {
    content = <ListGroup>{fetchedRepositories}</ListGroup>
  } else {
    content = <Blank />
  }

  return content
}

export default repositories