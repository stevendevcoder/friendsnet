import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../pages/Home'
import Login from '../components/Login'

function App() {

  return (
    <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route element={<Home/>} path={'/home'} />
      </Route>
      <Route element={<Login />} path='/login'/>
    </Routes>
  )
}

export default App
