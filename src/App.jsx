import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Payment from './components/Payment'


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/profiles' element={<Profile></Profile>} />
        <Route path='/payment' element={ <Payment></Payment>} />
        <Route
          path="*"
          element={
            <div className="lg:ml-[40vw] text-[#a8dadc] lg:mt-[20vw] lg:text-[3vw] capitalize">
              404 page not found
            </div>
          }/>
      </Routes>
      
     
    </>
  )
}

export default App
