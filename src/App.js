import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import AdminProfile from './componants/AdminPannel/AdminProfile' 
import Navbar from './componants/Relative-Componant/Navbar'
import SideBar from './componants/Sidebar/SideBar'
const App = () => {
    return (
        <Router>
            <Navbar />
            <SideBar />
            {/* <AdminProfile /> */}
            <Routes>
                
            </Routes>
        </Router>
    )
}

export default App