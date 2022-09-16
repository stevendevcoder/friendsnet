import React from 'react'

const style = {
  container: `font-sans w-full h-screen bg-[#0b1120]`,
  p: `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-600 p-3 underline`
}

const Creators = () => {
  return (
    <div className={style.container}>
      <p>Creators</p>
    </div>
  )
}

export default Creators;