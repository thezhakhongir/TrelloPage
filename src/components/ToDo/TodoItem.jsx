import { useDispatch, useSelector } from "react-redux";
import { trelloActions } from "../../store/reducers/trelloSlice";
import { Checkbox, IconButton } from "@mui/material";
import { DoneAll, RemoveDone } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import { Modal } from "../Modal/Modal";
import { showInfoModal } from "../../store/reducers/modalSlice";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

//Styles
const ListItem = styled.li`
   {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #9891a0;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
`;

export const TodoItem = (props) => {
  const state = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch(trelloActions.deleteCardItem(props));
  };
  const onChangeHandler = () => {
    dispatch(trelloActions.completed(props));
  };

  const openModal = () => {
    dispatch(showInfoModal());
  };

  return (
    <ListItem>
      <p
        style={
          props.completed
            ? {
                textDecoration: "line-through",
                color: "grey",
              }
            : {}
        }
      >
        {props.cardItem}
      </p>
      <div>
        <Checkbox
          onChange={onChangeHandler}
          checked={props.cardItem.completed}
          icon={<DoneAll />}
          checkedIcon={<RemoveDone />}
        />
        <IconButton onClick={openModal} aria-label={"modal"} color={"primary"}>
          <InfoOutlinedIcon />
        </IconButton>
        <IconButton aria-label={"delete"} color={"error"} onClick={deleteTask}>
          <DeleteIcon />
        </IconButton>
        {state.isInfoModalShow && (
          <Modal title={props.card} todo={props.cardItem} />
        )}
      </div>
    </ListItem>
  );
};
