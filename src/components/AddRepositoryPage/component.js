import React from 'react'

import HeaderComponent from './Header'
import ContentComponent from './Content'
import LayoutComponent from '../UI/Layout'

const AddRepositoryPageComponent = () => {
  return <LayoutComponent header={<HeaderComponent />} body={<ContentComponent />} />
}

export default AddRepositoryPageComponent
