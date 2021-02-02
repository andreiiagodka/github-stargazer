import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'

import Repository from '../Repository'

describe('<Repository /> component', () => {
  it('renders component correctly', () => {
    const props = {
      id: '1',
      name: 'Name',
      stars: 1
    }
    const tree = renderer.create(
      <MemoryRouter>
        <Repository {...props} />
      </MemoryRouter>
    ).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
})
