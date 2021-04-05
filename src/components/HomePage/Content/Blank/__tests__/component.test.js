import { shallow } from 'enzyme'

import BlankComponent from '..'

describe('<BlankComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BlankComponent />)

    expect(wrapper).toMatchSnapshot()
  })
})
