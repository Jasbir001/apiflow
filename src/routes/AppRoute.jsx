import React from 'react'
import { Route, Routes } from 'react-router'
import AllUsers from '../pages/AllUsers'
import UserDetails from '../pages/UserDetails'
import EditUser from '../pages/EditUser'

const AppRoute = () => {
  return (
    <Routes>
       <Route path="/" element={<AllUsers/>}> </Route> 
       <Route path="/users/:userid" element={<UserDetails/>}></Route>
       <Route path="/users/edit/:userid" element={<EditUser/>}></Route>
    </Routes>
  )
}
export default AppRoute