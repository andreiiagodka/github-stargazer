import { shallow } from 'enzyme'

import HeaderComponent from '..'

describe('<HeaderComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderComponent />)

    expect(wrapper).toMatchSnapshot()
  })
})