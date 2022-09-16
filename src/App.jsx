import { Routes, Route } from "react-router-dom";
import { Home, Politics, Creators, NotFound } from "./pages";
import { Login, Register } from "./components/";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import { Authguard } from "./guards";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* public routes */}
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />}/>
        <Route path={PUBLIC_ROUTES.POLITICS} element={<Politics />}/>
        <Route path={PUBLIC_ROUTES.CREATORS} element={<Creators />}/>

        {/* private routes */}
        <Route element={<Authguard />}>
          <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
