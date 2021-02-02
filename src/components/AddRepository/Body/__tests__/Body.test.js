import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, waitFor } from '@testing-library/react'

import Body from '../Body'

describe('<Body /> component', () => {
  let props = {
    getRepositoryData: jest.fn(),
    createRepository: jest.fn(),
    history: {}
  }

  it('renders component correctly', () => {
    const tree = renderer.create(<Body {...props} />).toJSON()
  
    expect(tree).toMatchSnapshot()
  })

  it('calls history.push with root location', async () => {
    const getRepositoryDataSuccess = jest.fn( () => Promise.resolve([{}, {}]) )
    const history = { push: jest.fn() }
    props = {
      ...props,
      getRepositoryData: getRepositoryDataSuccess,
      history: history
    }
  
    const { container } = render(<Body {...props} />)
    const button = container.querySelector('button')
    const name = container.querySelector('input[name="name"]')

    await waitFor(() => {
      fireEvent.change(name, { 
        target: { value: 'Name' }
      })
    })
    await waitFor(() => {
      fireEvent.click(button)
    })
  
    expect(history.push).toHaveBeenLastCalledWith('/')
  })

  it('shows `Required` error', async () => {
    const { container } = render(<Body {...props} />)
    const button = container.querySelector('button')
    await waitFor(() => {
      fireEvent.click(button)
    })
    
    expect(container).toMatchSnapshot()
  })

  it('shows `Repository not found` error', async () => {
    const getRepositoryDataFailed = jest.fn( () => Promise.reject( new Error() ) )
    props = {
      ...props,
      getRepositoryData: getRepositoryDataFailed
    }
  
    const { container } = render(<Body {...props} />)
    const button = container.querySelector('button')
    const name = container.querySelector('input[name="name"]')
    
    await waitFor(() => {
      fireEvent.change(name, { 
        target: { value: 'Name' }
      })
    })
    await waitFor(() => {
      fireEvent.click(button)
    })
  
    expect(container).toMatchSnapshot()
  })
})