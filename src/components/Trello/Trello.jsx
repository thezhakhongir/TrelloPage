import { useState } from "react";
import { useDispatch } from "react-redux";
import { trelloActions } from "../../store/reducers/trelloSlice";
import logo from "../../assets/image/trello.svg";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { CardList } from "../Cards/CardList";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { removeUser } from "../../store/reducers/logInSlice";
import styled from "styled-components";

//Styles
const Container = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
  }
`;

const Form = styled.form`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 10px;
    color: white;
    padding: 20px 30px 30px 30px;
    background-color: rgba(233, 247, 255, 0.68);
    box-shadow: 3px 3px 13px 3px rgba(99, 99, 99, 0.63);
    border-radius: 10px;
  }
`;

const InputBox = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    row-gap: 1rem;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
`;

export const Trello = ({ title }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const card = {
    id: Math.random().toString() * 100,
    card: value,
    cardItem: [],
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length !== 0) {
      dispatch(trelloActions.addCard(card));
      setValue("");
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={onSubmitHandler}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img className="logo" src={logo} alt="" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ color: "black" }}>{title}</p>
              <Link to="/">
                <IconButton
                  onClick={() => dispatch(removeUser())}
                  size={"small"}
                >
                  <LogoutIcon />
                </IconButton>
              </Link>
            </div>
          </div>
          <InputBox>
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={"Add Card"}
            />
            <Button
              style={{ backgroundColor: "#A15886" }}
              type="submit"
              variant={"contained"}
            >
              Add card
            </Button>
          </InputBox>
        </Form>
      </Container>
      <CardList />
    </>
  );
};
