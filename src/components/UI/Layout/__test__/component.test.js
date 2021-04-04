import React, { Fragment } from 'react'
import { shallow } from 'enzyme'

import LayoutComponent from '..'

describe('<LayoutComponent />', () => {
  it('renders correctly', () => {
    const props = {
      header: 'Header',
      body: 'Body'
    }
    const wrapper = shallow(<LayoutComponent {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
