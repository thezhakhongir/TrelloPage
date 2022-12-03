import logo from "../../assets/image/trello.svg";
import { Link } from "react-router-dom";
import { AuthForm } from "./AuthForm";
import { Container, Title, Wrapper } from "./LogIn";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/reducers/logInSlice";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpHandle = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(() => {
        navigate("/signup");
        alert("Введи почту и пароль для регистрации");
      });
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
          <Title>Sign Up</Title>
        </div>
        <AuthForm title="Sign Up" handleClick={signUpHandle} />
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "10px" }}>Already a member?</p>
          <Link to="/">
            <p
              style={{ color: "#A15886", fontWeight: "600", cursor: "pointer" }}
            >
              Log In
            </p>
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};
