import { shallow } from 'enzyme'

import ErrorComponent from '..'

describe('<ErrorComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorComponent />)

    expect(wrapper).toMatchSnapshot()
  })
})
