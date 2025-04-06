import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const isSellerPath = useLocation().pathname.includes("/seller");
  return (
    <div>
      {isSellerPath ? null : <Navbar /> }
      <div className={`${isSellerPath ? " " : "px-16 md:px-16 lg:px-24 xl:px-20"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  )
}

export default App