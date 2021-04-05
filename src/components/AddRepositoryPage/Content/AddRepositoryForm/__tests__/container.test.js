import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import AddRepositoryFormContainer from '..'

describe('<AddRepositoryFormContainer />', () => {
  it('renders correctly', () => {
    const mockStore = configureStore([])
    const store = mockStore({})

    const wrapper = shallow(<AddRepositoryFormContainer.WrappedComponent store={store} />)
    const container = wrapper.dive().dive()

    expect(container).toMatchSnapshot()
  })
})
