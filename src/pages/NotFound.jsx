import React from 'react'
import NavbarLogin from '../components/NavbarLogin'

const style = {
  container: 'w-full h-screen bg-[#0b1120]',
  p: `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-600 p-3 underline`
}

const NotFound = () => {
  return (
    <div className={style.container}>
      <NavbarLogin />
      <p className={style.p}>404 Not Found :(</p>
    </div>
  )
}

export default NotFound