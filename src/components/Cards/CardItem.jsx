import { useState } from "react";
import { useDispatch } from "react-redux";
import { trelloActions } from "../../store/reducers/trelloSlice";
import { TodoList } from "../ToDo/TodoList";
import { Button, IconButton, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

//Styles
const Card = styled.li`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    row-gap: 1rem;
    background-color: rgba(233, 247, 255, 0.68);
    box-shadow: 3px 3px 13px 3px rgba(99, 99, 99, 0.63);
    border-radius: 10px;
    padding: 20px;
  }
`;

const CardItemTop = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const CardItemForm = styled.form`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    row-gap: 10px;
  }
`;

export const CardItem = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const cardItem = {
    completed: false,
    mainId: props.id,
    id: Math.random().toString() * 120,
    cardItem: value,
  };
  const addCardItem = (e) => {
    e.preventDefault();
    if (value.trim().length !== 0) {
      dispatch(trelloActions.addCardItem(cardItem));
    }
    setValue("");
  };
  const deleteCard = () => {
    dispatch(trelloActions.deleteCard(props.id));
  };

  return (
    <Card>
      <CardItemTop>
        <h2 style={{ cursor: "pointer" }}>{props.card}</h2>
        <IconButton aria-label="delete" color={"error"} onClick={deleteCard}>
          <DeleteIcon />
        </IconButton>
      </CardItemTop>
      <CardItemForm onSubmit={addCardItem}>
        <Input
          placeholder={"Add task"}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text"
        />
        <Button
          style={{ backgroundColor: "#A15886" }}
          size={"small"}
          variant={"contained"}
          type="submit"
        >
          Add task
        </Button>
      </CardItemForm>
      <TodoList {...props} />
    </Card>
  );
};
