import React from 'react'
import renderer from 'react-test-renderer'

import Body from '../Body'

describe('<Body /> component', () => {
  it('renders component correctly', () => {
    const props = {
      repository: {
        stargazers_count: 1,
        watchers_count: 2,
        forks_count: 3,
        languages: { 'Ruby': 4 }
      }
    }
    const tree = renderer.create(<Body {...props} />).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
})
