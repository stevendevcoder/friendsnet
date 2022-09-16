import NavbarLogin from "../components/NavbarLogin";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const style = {
  container: `w-full h-screen bg-[#0b1120] flex flex-col gap-[30px] justify-center items-center`,
  h1: `text-center text-2xl text-white `,
  btn: `p-4 bg-[#fff] text-black rounded rounded-[12px] border hover:bg-black hover:text-white`
};

const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  console.log(user.photoURL)

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  }

  return (
    <>
      <NavbarLogin />

      <div className={style.container}>
        <h1 className={style.h1}>Bienvenid@ {user.displayName}</h1>
        <button onClick={handleLogout} className={style.btn}>Cerrar Sesión</button>
      </div>
    </>
  )
};

export default Home;
