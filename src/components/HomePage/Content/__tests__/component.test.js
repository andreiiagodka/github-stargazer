import { shallow } from 'enzyme'

import ContentComponent from '..'

describe('<ContentComponent />', () => {
  it('renders ListGroup', () => {
    const repositories = [
      {
        id: 'id',
        full_name: 'full_name',
        stargazers_count: 1 
      }
    ]

    const props = { repositories: repositories }
    const wrapper = shallow(<ContentComponent {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders BlankComponent', () => {
    const props = { repositories: [] }
    const wrapper = shallow(<ContentComponent {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
