import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function MainLayout() {
  return (
    <div>
        <Header/>

        <Outlet></Outlet>

        <Footer></Footer>

    </div>
  )
}
