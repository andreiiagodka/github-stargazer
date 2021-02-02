import React from 'react'
import renderer from 'react-test-renderer'

import Blank from '../Blank'

describe('<Blank /> component', () => {
  it('renders component correctly', () => {
    const tree = renderer.create(<Blank />).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
})
