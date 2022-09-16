import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../routes";

import { UserAuth } from "../context/AuthContext";

export const Authguard = () => {
  const { user } = UserAuth();

  console.log(user)

  if (!user) return <Navigate to={PUBLIC_ROUTES.LOGIN} />;

  return <Outlet />;
};
