import React from 'react'
import { useAuth } from '../auth/AuthProvider'

const Dashboard = () => {
  const auth = useAuth()

  return (
    <div className="container">
      <div>
        <h1>Welcome {auth.user.name}!</h1>
        <button onClick={() => auth.logOut()} className="btn-submit">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard