import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

/*
Component for displaying the basic layout of the page
*/
const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout