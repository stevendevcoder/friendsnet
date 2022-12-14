import React, {useState} from "react";

import NavbarLogin from "./NavbarLogin";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../routes";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase/firebase";
import { TabTitle } from "../utilities/FunctionTitle";

import { useForm } from "react-hook-form";

const style = {
  container: `font-sans w-full h-screen bg-[#0b1120]`,
  form_container: `flex flex-col justify-around items-center bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg bg-white/70 py-10 px-[25px] absolute bottom-0 left-[50%] -translate-x-1/2 sm:min-w-[80%] lg:min-w-[50%] md:min-w-[70%] h-[80%] rounded-t-[28px]`,
  h2: `text-3xl font-medium text-center text-white text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-pink-500`,
  form_card: `flex flex-col text-white`,
  input: `w-[350px] text-gray-900 bg-transparent border border-gray-700 rounded rounded-[12px] py-3 px-6 mt-2 outline-none`,
  span: `w-full h-[2px] bg-gray mt-15 mb-15 text-black`,
  googleBtn: `mt-[40px]`,
  submitBtn: `animate-palpitar mx-auto w-fit py-3 px-12 rounded rounded-[12px] text-[18px] bg-[#000300] hover:bg-gradient-to-r from-red-800 to-blue-700 transition-bg duration-800 ease-in-out mt-10 shadow-lg shadow-violet-900/50`,
  errMsg: `bg-red-500 w-full p-3 text-white text-center font-bold rounded rounded-[12px] shadow-2xl animate-palpitar`
};

const Login = () => {
  TabTitle("Login");
  const navigate = useNavigate();
  const { loginWithGoogle, loginWithEmail } = UserAuth()

  const { register, handleSubmit, formState: {errors} } = useForm()

  const [firebaseErr, setFirebaseErr] = useState('')

  const handleGoogleSumbit = async () => {
    try {
      await loginWithGoogle()
      navigate(PRIVATE_ROUTES.DASHBOARD)
    } catch (error) {
      console.log("Error: ", error)
    }
  }
  
  const onSubmitForm = async (data) => {
    try {
      await loginWithEmail(data.email, data.password)
      navigate(PRIVATE_ROUTES.DASHBOARD)
    } catch(error) {
      const errMsg = error.message.includes('wrong-password') ? 'Contrase??a incorrecta' : error.message
      setFirebaseErr(errMsg)
    }
  }

  console.log("Errors: ",errors?.email, " FirebaseErr: ", firebaseErr) 

  return (
    <div className={style.container + ` hola`}>
      <NavbarLogin />

      <div className={style.form_container}>
        <h2 className={style.h2}>Inicia sesi??n</h2>


        <form className={style.form_card} onSubmit={handleSubmit(onSubmitForm)}>
          {firebaseErr && <div className={style.errMsg}>{firebaseErr}</div>}

          <label className='mt-10 text-black'>Email:</label>
          <input 
            {...register('email', { 
              required: 'Escrib?? pues hpta', 
              pattern: {
                message: 'El email no es valido panita'
              }
            })}
            placeholder="tucorreo@ejemplo.com"
            className={style.input} 
            type="text"
          />
          {errors.email?.message && <p className='text-red-400'>*{errors.email?.message}</p>}

          <label className='mt-5 text-black'>Contrase??a:</label>
          <input 
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Ponete una contrase??a m??s larga hpta!'
              }
            })}
            placeholder="Tu contrase??a"
            className={style.input} 
            type="password" 
          />
          {errors.password?.message && <p className='text-red-400'>*{errors.password?.message}</p>}


          <button className={style.submitBtn} type='submit'>Entrar</button>
        </form>

        <span className={style.span}></span>

        <GoogleButton onClick={handleGoogleSumbit} className={style.googleBtn} type="dark" />  
      </div>

    </div>
  );
};

export default Login;
