import logo from "../../assets/image/trello.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthForm } from "./AuthForm";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/reducers/logInSlice";
import { useNavigate } from "react-router-dom";

//Styles
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
   {
    background-color: rgba(209, 213, 222, 0.87);
    border-radius: 20px;
    padding: 30px 10px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 50px;
    @media (max-width: 450px) {
      width: 90%;
    }
    @media (max-width: 900px) {
      width: 80%;
    }
  }
`;

export const Title = styled.h1`
   {
    color: #a15886;
  }
`;

export const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logInHandle = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (email.trim().length !== 0) {
          dispatch(
            setUser({
              email: user.email,
              token: user.accessToken,
              id: user.uid,
              password: user.password,
            })
          );
          navigate("/trello");
        }
      })
      .catch(() => alert("Неправильный логин или пароль!"));
  };

  return (
    <Wrapper>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="logo" />
          <Title>Log In</Title>
        </div>
        <AuthForm title="Log In" handleClick={logInHandle} />
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "10px" }}>Don’t have an account?</p>
          <Link to="/signup">
            <p
              style={{ cursor: "pointer", color: "#A15886", fontWeight: "600" }}
            >
              Sign Up
            </p>
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};
