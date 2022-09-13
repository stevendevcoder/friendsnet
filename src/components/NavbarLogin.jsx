import React from 'react'

const style = {
  navbar: `px-7 py-6 w-full min-h-[60px] fixed bg-[#0b1120] shadow-lg shadow-indigo-500/1 flex justify-between items-center`,
  title: `text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-left `,
  links: `flex gap-[20px] justify-between items-center text-white`,
  li: `p-2 hover:bg-[#fff] rounded-lg hover:text-[#000] cursor-pointer transition-all duration-500 ease-in-out`
}

const NavbarLogin = () => {
  return (
    <div className={style.navbar}>
      <h1 className={style.title}>Friendsnet</h1>

      <ul className={style.links}>
        <li className={style.li}>Home</li>
        <li className={style.li}>Iniciar sesion</li>
        <li className={style.li}>Politicas</li>
        <li className={style.li}>Creadores</li>
      </ul>
    </div>
  )
}

export default NavbarLogin