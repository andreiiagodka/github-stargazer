import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import AddRepositoryFormComponent from '..'

describe('<AddRepositoryFormComponent />', () => {
  it('renders correctly', () => {
    const mockStore = configureStore([])
    const store = mockStore({})

    const wrapper = shallow(<AddRepositoryFormComponent.WrappedComponent store={store} />)

    expect(wrapper).toMatchSnapshot()
  })
})
