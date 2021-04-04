import { shallow } from 'enzyme'

import RepositoryComponent from '..'

describe('<RepositoryComponent />', () => {
  it('renders correctly', () => {
    const props = {
      id: 'id',
      name: 'name',
      stars: 1
    }
    const wrapper = shallow(<RepositoryComponent {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
