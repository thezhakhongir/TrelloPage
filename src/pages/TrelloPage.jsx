import { Navigate } from "react-router-dom";
import { Trello } from "../components/Trello/Trello";
import { useAuth } from "../hooks/useAuth";

export const TrelloPage = () => {
  const { isAuth, email } = useAuth();
  return isAuth ? <Trello title={email} /> : <Navigate to="login" />;
};
