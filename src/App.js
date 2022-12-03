import { Route, Routes } from "react-router-dom";
import { SignUp } from "./components/Auth/SignUp";
import { LogIn } from "./components/Auth/LogIn";
import { Trello } from "./components/Trello/Trello";
import { TrelloPage } from "./pages/TrelloPage";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { email } = useAuth();
  return (
    <Routes>
      <Route element={<TrelloPage />}>
        <Route path="trello" element={<Trello title={email} />} />
      </Route>
      <Route path="/" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
