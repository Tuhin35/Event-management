import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../Pages/signup/Footer/Footer'


const Main = () => {
    return (
        <div className='h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Main
