import React from 'react'

import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase/firebase'
import { Navigate } from 'react-router-dom'

const style = {

}

const Login = () => {
  
  const loginWithGoogle = ( ) => {
    const provider = new GoogleAuthProvider()

    signInWithRedirect(auth, provider)
  }

  return (
    <div className={style.container}>
      <GoogleButton type="dark" onClick={loginWithGoogle} />
    </div>
  )
}

export default Login