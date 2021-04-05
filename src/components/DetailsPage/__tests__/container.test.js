import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'

import DetailsPageContainer from '..'

describe('<DetailsPageContainer />', () => {
  const mockStore = configureStore([])

  it('renders SpinnerComponent', () => {
    const initialState = {
      fetchRepository: { repository: null, loading: true, error: false }
    }
    const store = mockStore(initialState)

    const wrapper = shallow(
      <Router>
        <DetailsPageContainer store={store} />
      </Router>
    )
    const container = wrapper.dive().dive().dive().dive().dive().dive().dive().dive().dive()

    expect(container).toMatchSnapshot()
  })

  it('renders ErrorComponent', () => {
    const initialState = {
      fetchRepository: { repository: null, loading: false, error: true }
    }
    const store = mockStore(initialState)

    const wrapper = shallow(
      <Router>
        <DetailsPageContainer store={store} />
      </Router>
    )
    const container = wrapper.dive().dive().dive().dive().dive().dive().dive().dive().dive()

    expect(container).toMatchSnapshot()
  })

  it('renders LayoutComponent', () => {
    const initialState = {
      fetchRepository: { repository: {}, loading: false, error: false }
    }
    const store = mockStore(initialState)

    const wrapper = shallow(
      <Router>
        <DetailsPageContainer store={store} />
      </Router>
    )
    const container = wrapper.dive().dive().dive().dive().dive().dive().dive().dive().dive()

    expect(container).toMatchSnapshot()
  })
})
