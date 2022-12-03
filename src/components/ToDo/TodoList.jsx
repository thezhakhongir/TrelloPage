import { TodoItem } from "./TodoItem";
import styled from "styled-components";

//Styles
const List = styled.ul`
   {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const TodoList = ({ cardItem, card }) => {
  return (
    <List>
      {cardItem.map((item) => (
        <TodoItem key={item.id} card={card} {...item} />
      ))}
    </List>
  );
};
