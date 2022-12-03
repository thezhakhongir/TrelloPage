import { useSelector } from "react-redux";
import { CardItem } from "./CardItem";
import styled from "styled-components";

//Styles
const List = styled.ul`
   {
    display: flex;
    justify-content: center;
    gap: 20px;
    row-gap: 20px;
    flex-wrap: wrap;
    padding: 1rem;
  }
`;

export const CardList = () => {
  const state = useSelector((state) => state.trello.cards);
  return (
    <List>
      {state.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </List>
  );
};
