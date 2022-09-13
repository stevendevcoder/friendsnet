import { Navigate, Outlet } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../routes";

export const Authguard = ({ privates }) => {
  // da error por eso esta comentado y en su lugar se usa una prop temporal xd
  // const [user] = useAuthState();

  if (!privates) return <Navigate to={PUBLIC_ROUTES.LOGIN} />;

  return <Outlet />;
};
