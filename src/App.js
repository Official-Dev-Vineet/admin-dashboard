import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './componants/DashBoard/Dashboard'
// import AdminProfile from './componants/AdminPannel/AdminProfile' 
import Navbar from './componants/Relative-Componant/Navbar'
import SideBar from './componants/Sidebar/SideBar'
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <SideBar />
            <div className='container'>
                <Routes>
                    <Route index path='/' element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}

export default App