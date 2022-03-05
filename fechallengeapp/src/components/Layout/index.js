import React from 'react'
import { Breadcrumb } from '../Breadcrumb'
import { Header } from '../Header'

export const Layout = ({ children }) => {
  return (
    <div>
        <Header></Header>
        <Breadcrumb/>
        <div>
        { children }
        </div>
    </div>
  )
}
