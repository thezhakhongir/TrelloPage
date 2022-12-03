import { Button, Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {Link} from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import styled from "styled-components";
import { useState } from "react";



//Styles
const Form = styled.form`
   {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    @media (max-width: 450px) {
      width: 80%;
      row-gap: 30px;
    }
    @media (max-width: 900px) {
      width: 65%;
    }
  }
`;

const Container = styled.div`
   {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AuthForm = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form>
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{ width: "90%" }}
          placeholder={"E-Mail"}
          type={"email"}
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <MailOutlineIcon />
            </InputAdornment>
          }
        />
        <Input
          style={{ width: "90%" }}
          placeholder={"Password"}
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge={"end"}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Link to='/trello'>
          <Button
            onClick={() => handleClick(email, values.password)}
            endIcon={<LoginIcon />}
            style={{ backgroundColor: "#A15886" }}
            variant={"contained"}
            type={"submit"}
          >
            {title}
          </Button>
        </Link>
      </Form>
    </Container>
  );
};
