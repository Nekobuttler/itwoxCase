import React, { createContext, useState, useEffect, useContext } from 'react'

interface AuthContextType {}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  }

  return <AuthContext.Provider value={value}>{...props.children}</AuthContext.Provider>
}
