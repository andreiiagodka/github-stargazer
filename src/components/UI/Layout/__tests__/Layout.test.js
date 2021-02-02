import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../Layout'

describe('<Layout /> component', () => {
  it('renders component correctly', () => {
    const props = {
      header: 'Header',
      body: 'Body'
    }
    const tree = renderer.create(<Layout {...props} />).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
})
