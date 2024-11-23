import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Outlet/>
      </div>
    </>
  )
}

export default layout
