import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RideBooking from '../Pages/RideBooking'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import UserHome from '../Pages/UserHome'

export default function CustomeRoute() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home-user' element={<UserHome/>}/>
            <Route path='/bookride' element={<RideBooking/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}
