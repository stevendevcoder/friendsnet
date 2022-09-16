import React, { createContext, useContext, useEffect, useState } from "react"

import { 
  GoogleAuthProvider, 
  signInWithRedirect,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword
} from "firebase/auth"

import { auth, db } from '../firebase/firebase.js'
import { setDoc, getDoc, doc } from 'firebase/firestore'

export const AuthContext = createContext()

export const UserAuth = () => useContext(AuthContext)

export function AuthProvider({ children }){
  const [user, setUser] = useState({})
  
  //AUTH FUNCTIONS

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }

  const registerWithEmail = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)

  const loginWithEmail = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const logout = () => signOut(auth)

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        console.log('[SESION]: ', currentUser.uid)
      }
    })
    return () => unsuscribe()
  },[])

  return (
    <AuthContext.Provider 
      value={{
        user,
        registerWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

