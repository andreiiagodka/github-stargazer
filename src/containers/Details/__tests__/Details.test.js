import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router'
import Details from '../Details'

describe('<Details /> container', () => {
  let store

  const mockStore = configureStore([])
  const fetchRepository = {
    repository: {},
    loading: false,
    error: false,
    fetchRepository: jest.fn()
  }

  it('renders <Spinner /> container', () => {
    const fetchRepositoryProps = {
      ...fetchRepository,
      loading: true
    }
    store = mockStore({ fetchRepository: fetchRepositoryProps })
    store.dispatch = jest.fn()

    const tree = renderer.create(
      <Provider store={store} >
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders <Error /> container', () => {
    const fetchRepositoryProps = {
      ...fetchRepository,
      error: true
    }
    store = mockStore({ fetchRepository: fetchRepositoryProps })
    store.dispatch = jest.fn()

    const tree = renderer.create(
      <Provider store={store} >
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders container correctly', () => {
    const fetchRepositoryProps = {
      ...fetchRepository,
      repository: {
        id: '1',
        full_name: 'Full name',
        stargazers_count: 1,
        watchers_count: 2,
        forks_count: 3,
        languages: { 'Ruby': 4 }
      }
    }
    store = mockStore({ fetchRepository: fetchRepositoryProps })
    store.dispatch = jest.fn()

    const tree = renderer.create(
      <Provider store={store} >
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})