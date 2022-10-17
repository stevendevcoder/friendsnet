import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { PRIVATE_ROUTES } from '../routes/routes'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { MdSettings } from 'react-icons/md'

const style = {
  navbar: `h-screen w-[230px] flex flex-col justify-between items-left bg-[#0b1120] p-[30px] shadow-lg shadow-white-500/10 border-r border-gray-800`,
  title: `text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-left`,
  links: `flex gap-[20px] text-[#fff] justify-start items-center`,
  sections: `flex flex-col gap-[40px]`
}

const NavbarHome = () => {
  return (
    <div className={style.navbar}>
      <h1 className={style.title}>Friendsnet</h1>

      <div className={style.sections}>
        <NavLink to={PRIVATE_ROUTES.DASHBOARD} className={style.links}>
          <AiFillHome size={40} />
          <p>Inicio</p>
        </NavLink>

        <NavLink to={PRIVATE_ROUTES.SEARCH} className={style.links}>
          <AiOutlineSearch size={40} />
          <p>Buscar</p>
        </NavLink>

        <NavLink to={PRIVATE_ROUTES.MESSAGES} className={style.links}>
          <BsFillChatDotsFill size={40} />
          <p>Chats</p>
        </NavLink>

        <NavLink to={PRIVATE_ROUTES.MY_PROFILE} className={style.links}>
          <CgProfile size={40} />
          <p>Mi perfil</p>
        </NavLink>
      </div>

      <div className={style.links}>
        <MdSettings size={40}/>
        <p>Ajustes</p>
      </div>
    </div>
  )
}

export default NavbarHome