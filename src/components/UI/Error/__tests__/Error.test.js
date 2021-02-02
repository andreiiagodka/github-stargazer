import React from 'react'
import renderer from 'react-test-renderer'

import Error from '../Error'

describe('<Error /> component', () => {
  it('renders component correctly', () => {
    const tree = renderer.create(<Error />).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
})
