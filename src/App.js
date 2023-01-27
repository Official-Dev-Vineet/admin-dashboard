import React, { useState, useEffect, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Customer from './componants/Customers/Customer'
import Dashboard from './componants/DashBoard/Dashboard'
import Navbar from './componants/Relative-Componant/Navbar'
import SideBar from './componants/Sidebar/SideBar'
import User from './componants/Customers/user/User'
import Card from './componants/Customers/user/Card'
import Order from './componants/Orders/Order'
import Analytics from './componants/Analytics/Analytics'
import Message from './componants/Message/Message'
import Product from './componants/Products/Product'
import Report from './componants/Reports/Report'
import Setting from './componants/Settings/Setting'
import Account from './componants/Account/Account'
import Logout from './componants/Account/Logout'
import AdminProfile from './componants/AdminPannel/AdminProfile'

const App = () => {
    const [isShow, setIsShow] = useState(true);
    useEffect(() => {
        let menubar = document.getElementById("menuBar");
        menubar.addEventListener('click', () => {
            setIsShow((pre) => !pre)
        })
    }, []);
    useEffect(() => {
        isShow == true ? document.querySelector(".dashboard").classList.remove("active") : document.querySelector(".dashboard").classList.add("active")
        isShow == true ? document.querySelector("aside").classList.remove("active") : document.querySelector("aside").classList.add("active")
    }, [isShow])
    return (
        <BrowserRouter>
            <Navbar />
            <SideBar />
            <Routes>
                <Route index path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/Customers' element={<Customer />} >
                    <Route path='/Customers/:user' element={<User />}>
                    </Route>

                </Route>
                <Route path='/Customers/:user/:data' element={<Card />} />
                <Route path='/Orders' element={<Order />} />
                <Route path='/Analytics' element={<Analytics />} />
                <Route path='/Messages' element={<Message />} >
                    <Route path='/Messages/:user' element={<Message />} />
                </Route>
                <Route path='/Products' element={<Product />} >
                    <Route path='/Products/:item' element={<Product />} />
                </Route>
                <Route path='/Reports' element={<Report />} />
                <Route path='/Settings' element={<Setting />} />
                <Route path='/Add-account' element={<Account />} />
                <Route path='/Logout' element={<Logout />} />
                <Route path='/editProfile' element={<AdminProfile />} />
                <Route path='/*' element={<div>404 page not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App