import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react'

import ActionButton from '../ActionButton'

describe('<ActionButton /> component', () => {
  const history = { push: jest.fn() }
  const props = {
    id: 'id',
    history: history
  }

  it('renders component correctly', () => {
    const tree = renderer.create(<ActionButton {...props} />).toJSON()
  
    expect(tree).toMatchSnapshot()
  })
  
  it('calls history push on click', () => {
    const { container } = render(<ActionButton {...props} />)
    const button = container.querySelector('button')
    fireEvent.click(button)
  
    expect(history.push).toHaveBeenLastCalledWith('/')
  })
})
