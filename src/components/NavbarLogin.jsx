import React from 'react'
import { NavLink } from 'react-router-dom'
import { PUBLIC_ROUTES, PRIVATE_ROUTES} from '../routes';

const style = {
  navbar: `px-7 py-6 w-full min-h-[60px] fixed bg-[#0b1120] shadow-lg shadow-white-500/10 flex justify-between items-center`,
  title: `text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-left `,
  links: `flex gap-[20px] justify-between items-center text-white`,
  li: `p-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#fff] hover:text-[#000]`,
  selected: `bg-[#fff] text-[#000] transition-all duration-300 ease-in-out`
}

const NavbarLogin = () => {
  return (
    <div className={style.navbar}>
      <h1 className={style.title}>Friendsnet</h1>

      <ul className={style.links}>
        <NavLink to={PRIVATE_ROUTES.HOME} className={style.li}>Home</NavLink>
        <NavLink to={PUBLIC_ROUTES.LOGIN} className={({isActive})=>(isActive ? (style.li+' '+style.selected):style.li)}>Iniciar sesion</NavLink>
        <NavLink to={PUBLIC_ROUTES.REGISTER} className={({isActive})=>(isActive ? (style.li+' '+style.selected):style.li)}>Crear Cuenta</NavLink>

      </ul>
    </div>
  )
}

export default NavbarLogin