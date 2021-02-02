import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../Header'

describe('<Header /> component', () => {
  it('renders component correctly', () => {
    const props = {
      title: 'Title',
      actionButton: 'Action Button'
    }
    const tree = renderer.create(<Header {...props} />).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
})
