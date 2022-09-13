import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'

import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const [user] = useAuthState(auth);

  if(!user) return <Navigate to='/login'></Navigate>

  return <Outlet />
}

export default ProtectedRoute