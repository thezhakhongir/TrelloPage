import { Button, Checkbox, IconButton, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { hideEditModal, hideInfoModal } from "../../store/reducers/modalSlice";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import { useState } from "react";
import { trelloActions } from "../../store/reducers/trelloSlice";

const BackDrop = styled.div`
   {
    z-index: 10;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
`;

const ModalWindow = styled.div`
   {
    padding: 3rem;
    background-color: white;
    border-radius: 10px;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Modal = ({ todo, title }) => {
  const dispatch = useDispatch();
  const closeInfoModal = () => dispatch(hideInfoModal());

  return (
    <BackDrop onClick={closeInfoModal}>
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <p style={{ fontSize: "1.3rem", borderBottom: "1px solid #9891a0" }}>
          {todo}
        </p>

        <p>
          You are in <b style={{ fontSize: "1.5rem" }}>{title}</b> card
        </p>
        <Button
          size={"small"}
          style={{ backgroundColor: "#A15886" }}
          variant={"contained"}
          onClick={closeInfoModal}
        >
          Close
        </Button>
      </ModalWindow>
    </BackDrop>
  );
};
