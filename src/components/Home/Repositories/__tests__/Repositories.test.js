import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'

import Repositories from '../Repositories'

describe('<Repositories /> component', () => {
  it('when repositories are not empty', () => {
    const props = {
      repositories: [
        {
          id: 1,
          full_name: 'Full name',
          stargazers_count: 1
        }
      ]
    }
    const tree = renderer.create(
      <MemoryRouter>
        <Repositories {...props} />
      </MemoryRouter>
    ).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
  
  it('when repositories are empty', () => {
    const props = { repositories: [] }
    const tree = renderer.create(<Repositories {...props} />).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
})
