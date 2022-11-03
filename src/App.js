import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminProfile from './componants/AdminPannel/AdminProfile'
import Navbar from './componants/Relative-Componant/Navbar'
const App = () => {
    return (
        <Router>
            <Navbar />
            <AdminProfile />
            <Routes>
                
            </Routes>
        </Router>
    )
}

export default App