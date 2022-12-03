import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./components/Auth/SignUp";
import { LogIn } from "./components/Auth/LogIn";
import { Trello } from "./components/Trello/Trello";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="/" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="trello" element={<Trello />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
