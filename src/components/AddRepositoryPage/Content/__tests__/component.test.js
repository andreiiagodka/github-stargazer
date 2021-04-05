import { shallow } from 'enzyme'

import ContentComponent from '..'

describe('<ContentComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContentComponent />)

    expect(wrapper).toMatchSnapshot()
  })
})
