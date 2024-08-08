import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

const PrivateRoute = () => {
  const auth = useAuth()
  const token = localStorage.getItem("site")
  console.log(token)
  console.log(auth)

  if (!token) return <Navigate to="/login"/>
  return <Outlet />
}

export default PrivateRoute