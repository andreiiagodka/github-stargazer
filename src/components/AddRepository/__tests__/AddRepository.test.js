import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'

import AddRepository from '../AddRepository'

describe('<AddRepository /> component', () => {
  it('renders component correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <AddRepository />
      </MemoryRouter>
    ).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
})
