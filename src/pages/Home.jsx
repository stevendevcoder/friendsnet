import { useAuthState } from "react-firebase-hooks/auth";

const style = {};

const Home = () => {
  const [user] = useAuthState();

  return <div>Home</div>;
};

export default Home;
