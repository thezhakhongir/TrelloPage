import { Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { LogIn } from "../components/Auth/LogIn";

export const TrelloPage = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <LogIn />;
};
