import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router'
import Home from '../Home'

describe('<Home /> container', () => {
  let store

  const mockStore = configureStore([])
  const fetchRepositories = {
    repositories: [],
    loading: false,
    fetchRepositories: jest.fn()
  }

  it('renders <Spinner /> container', () => {
    const fetchRepositoriesProps = {
      ...fetchRepositories,
      loading: true
    }
    store = mockStore({ fetchRepositories: fetchRepositoriesProps })
    store.dispatch = jest.fn()

    const tree = renderer.create(
      <Provider store={store} >
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders <Blank /> container', () => {
    store = mockStore({ fetchRepositories: fetchRepositories })
    store.dispatch = jest.fn()

    const tree = renderer.create(
      <Provider store={store} >
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders container correctly', () => {
    const fetchRepositoriesProps = {
      ...fetchRepositories,
      repositories: [
        {
          id: '1',
          full_name: 'Full name',
          stargazers_count: 1
        }
      ]
    }
    store = mockStore({ fetchRepositories: fetchRepositoriesProps })
    store.dispatch = jest.fn()

    const tree = renderer.create(
      <Provider store={store} >
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})