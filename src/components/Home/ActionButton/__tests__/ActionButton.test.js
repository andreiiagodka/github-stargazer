import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'

import ActionButton from '../ActionButton'

describe('<ActionButton /> component', () => {
  it('renders component correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <ActionButton />
      </MemoryRouter>
    ).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
})
