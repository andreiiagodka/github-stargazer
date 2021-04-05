import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import HeaderContainer from '..'

describe('<HeaderContainer />', () => {
  it('renders correctly', () => {
    const mockStore = configureStore([])
    const store = mockStore({})

    const repository = { full_name: 'full name' }
    const history = {}

    const props = { repository: repository, history: history,  }
    const wrapper = shallow(<HeaderContainer.WrappedComponent store={store} {...props} />)
    const container = wrapper.dive()

    expect(container).toMatchSnapshot()
  })
})
