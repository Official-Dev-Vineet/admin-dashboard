import React, { useEffect, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Customer from './componants/Customers/Customer'
import Dashboard from './componants/DashBoard/Dashboard'
import Navbar from './componants/Relative-Componant/Navbar'
import SideBar from './componants/Sidebar/SideBar'
import User from './componants/Customers/user/User'
const App = () => {
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
                    <Route path='/*' element={<div>404 page not found</div>} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}

export default App