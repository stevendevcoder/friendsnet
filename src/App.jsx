import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Login } from "./components/";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import { Authguard } from "./guards";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

      {/* private routes */}
      <Route element={<Authguard privates={false} />}>
        <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
