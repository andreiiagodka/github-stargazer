import { shallow } from 'enzyme'

import ContentComponent from '..'

describe('<ContentComponent />', () => {
  it('renders correctly', () => {
    const repository = {
      stargazers_count: 100,
      watchers_count: 200,
      forks_count: 300,
      languages: {
        JavaScript: 400
      }
    }

    const props = { repository: repository }
    const wrapper = shallow(<ContentComponent {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
