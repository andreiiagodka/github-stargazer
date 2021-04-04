import React from 'react'
import PropTypes from 'prop-types'

import { ListGroup } from 'react-bootstrap'

import RepositoryComponent from './Repository'
import BlankComponent from './Blank'

const ContentComponent = ({ repositories }) => {
  const fetchedRepositories = repositories.map(repository => {
    return (
      <RepositoryComponent
        key={repository.id} 
        id={repository.id}
        name={repository.full_name}
        stars={repository.stargazers_count} />
    )
  })

  return ( repositories.length ? <ListGroup>{fetchedRepositories}</ListGroup> : <BlankComponent /> )
}

ContentComponent.propTypes = {
  repositories: PropTypes.array
}

export default ContentComponent