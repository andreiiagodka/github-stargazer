import { shallow } from 'enzyme'

import AddRepositoryPageComponent from '..'

describe('<AddRepositoryPageComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AddRepositoryPageComponent />)

    expect(wrapper).toMatchSnapshot()
  })
})