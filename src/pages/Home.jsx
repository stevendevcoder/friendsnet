import NavbarHome from "../components/NavbarHome";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../utilities/FunctionTitle";

const style = {
  layout: `w-full h-screen grid grid-cols-[auto_1fr] overflow-hidden`,
  container: `bg-[#0b1120] flex flex-col gap-[30px] justify-center items-center`,
  h1: `text-center text-2xl text-white `,
  btn: `p-4 bg-[#121c36] text-white rounded-[12px] transition duration-500 hover:bg-[#182445] hover:text-white`,
  photoURL: `rounded-[12.5px]`,
};

const Home = () => {
  TabTitle("Home")
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  console.log(user.photoURL)

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  }

  return (
    <div className={style.layout}>
      <NavbarHome />

      <div className={style.container}>
        <img className={style.photoURL} src={user.photoURL} />
        <h1 className={style.h1}>Bienvenid@ {user.displayName}</h1>
        <button onClick={handleLogout} className={style.btn}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Home;
