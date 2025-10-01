import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RideBooking from '../Pages/RideBooking'
import Home from '../Pages/Home'

export default function CustomeRoute() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/bookride' element={<RideBooking/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}
