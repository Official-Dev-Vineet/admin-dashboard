import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Customer from './componants/Customers/Customer'
import Dashboard from './componants/DashBoard/Dashboard'
import Navbar from './componants/Relative-Componant/Navbar'
import SideBar from './componants/Sidebar/SideBar'
import User from './componants/Customers/user/User'
import Order from './componants/Orders/Order'
import Analytics from './componants/Analytics/Analytics'
import Message from './componants/Message/Message'
import Product from './componants/Products/Product'
import Report from './componants/Reports/Report'
const App = () => {
    const [isShow, setIsShow] = useState(true);
    useEffect(() => {
        let menubar = document.getElementById("menuBar");
        menubar.addEventListener('click', () => {
            setIsShow((pre) => !pre)
        })
    }, []);
    useEffect(() => {
        isShow ? document.querySelector(".dashboard").classList.remove("active") : document.querySelector(".dashboard").classList.add("active")
        isShow ? document.querySelector("aside").classList.remove("active") : document.querySelector("aside").classList.add("active")
    }, [isShow])
    return (
        <BrowserRouter>
            <Navbar />
            <SideBar />
            <div className='container'>
                <Routes>
                    <Route index path='/' element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/Customers' element={<Customer />} >
                        <Route path='/Customers/:user' element={<User />} />
                    </Route>
                    <Route path='/Orders' element={<Order />} />
                    <Route path='/Analytics' element={<Analytics />} />
                    <Route path='/Messages' element={<Message />} >
                        <Route path='/Messages/:user' element={<Message />} />
                    </Route>
                    <Route path='/Products' element={<Product />} >
                        <Route path='/Products/:item' element={<Product />} />
                    </Route>
                    <Route path='/Reports' element={<Report />} />
                    <Route path='/*' element={<div>404 page not found</div>} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}

export default App