import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import HomePageContainer from '..'

describe('<HomePageContainer />', () => {
  const mockStore = configureStore([])

  it('renders SpinnerComponent', () => {
    const initialState = {
      fetchRepositories: { repositories: [], loading: true, error: false }
    }
    const store = mockStore(initialState)

    const wrapper = shallow(<HomePageContainer store={store} />)
    const container = wrapper.dive().dive().dive()

    expect(container).toMatchSnapshot()
  })

  it('renders ErrorComponent', () => {
    const initialState = {
      fetchRepositories: { repositories: [], loading: false, error: true }
    }
    const store = mockStore(initialState)

    const wrapper = shallow(<HomePageContainer store={store} />)
    const container = wrapper.dive().dive().dive()

    expect(container).toMatchSnapshot()
  })

  it('renders LayoutComponent', () => {
    const initialState = {
      fetchRepositories: { repositories: [], loading: false, error: false }
    }
    const store = mockStore(initialState)

    const wrapper = shallow(<HomePageContainer store={store} />)
    const container = wrapper.dive().dive().dive()

    expect(container).toMatchSnapshot()
  })
})
