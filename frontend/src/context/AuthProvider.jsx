import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({children}) => {
    const user={
        id:1,
        name:"tvc",
        email:"tvc@gmail.com"
    }
  return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider