import React from 'react'

import Header from './Header'
import Content from './Content'
import LayoutComponent from '../UI/Layout'

const AddRepositoryPage = () => {
  return <LayoutComponent header={<Header />} body={<Content />} />
}

export default AddRepositoryPage
