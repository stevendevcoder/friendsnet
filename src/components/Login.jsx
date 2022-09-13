import React, {useState} from "react";

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth } from "../firebase/firebase";
import { Navigate } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";

const style = {
  container: `font-sans w-full h-screen bg-[#0b1120]`,
  form_container: `flex flex-col justify-around items-center bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg bg-white py-10 px-[25px] absolute bottom-0 left-[50%] -translate-x-1/2 min-w-[600px] h-[500px] rounded-t-[28px]`,
  h2: `text-3xl font-extrabold text-center text-white text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-pink-800`,
  form_card: `flex flex-col text-white`,
  input: `w-[350px] bg-transparent border border-gray-700 rounded rounded-[12px] py-3 px-6 mt-2`,
  span: `w-full h-[2px] bg-gray mt-15 mb-15 text-black`,
  googleBtn: `mt-[40px]`,
  submitBtn: `mx-auto w-fit py-3 px-12 rounded rounded-[12px] text-[18px] bg-[#000300] hover:bg-gradient-to-r from-red-800 to-blue-700 transition-bg duration-800 ease-in-out mt-10 shadow-lg shadow-violet-900/50`
};

const Login = () => {
  const [data, setData] = useState();

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
  };

  return (
    <div className={style.container}>
      <NavbarLogin />

      <div className={style.form_container}>
        <h2 className={style.h2}>Inicia sesión</h2>

        <form className={style.form_card}>
          <label className='mt-10 text-black'>Email:</label>
          <input className={style.input} type="text" />

          <label className='mt-5 text-black'>Contraseña:</label>
          <input className={style.input} type="text" />

          <button className={style.submitBtn} type='submit'>Entrar</button>
        </form>

        <span className={style.span}></span>

        <GoogleButton className={style.googleBtn} type="dark" onClick={loginWithGoogle} />  
      </div>

    </div>
  );
};

export default Login;
