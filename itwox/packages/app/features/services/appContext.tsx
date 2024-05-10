import React, { createContext, useState, useEffect, useContext } from 'react'

interface AuthContextType {
  // Define your context properties and their types here
}

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
