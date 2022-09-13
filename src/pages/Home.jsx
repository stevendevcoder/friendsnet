import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const style = {

}

const Home = () => {
  const [user] = useAuthState()

  console.log(user.displayName)
  
  return (
    <div>Home</div>
  )
}

export default Home