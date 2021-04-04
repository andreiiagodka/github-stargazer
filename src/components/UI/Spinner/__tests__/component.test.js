import { shallow } from 'enzyme'

import SpinnerComponent from '..'

describe('<SpinnerComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SpinnerComponent />)

    expect(wrapper).toMatchSnapshot()
  })
})
