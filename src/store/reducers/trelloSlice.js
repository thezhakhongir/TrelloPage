import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};
const trelloSlice = createSlice({
  name: "trello",
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    addCardItem(state, action) {
      const newItem = state.cards.find(
        (item) => item.id === action.payload.mainId
      );
      newItem.cardItem.push(action.payload);
    },
    deleteCard(state, action) {
      state.cards = state.cards.filter((item) => item.id !== action.payload);
    },
    deleteCardItem(state, action) {
      const deletedItem = state.cards.find(
        (item) => item.id === action.payload.mainId
      );
      deletedItem.cardItem = deletedItem.cardItem.filter(
        (item) => item.id !== action.payload.id
      );
    },
    completed(state, action) {
      const completedItem = state.cards.find(
        (item) => item.id === action.payload.mainId
      );
      completedItem.cardItem = completedItem.cardItem.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              completed: !item.completed,
            }
          : { ...item }
      );
    },
  },
});
export const trelloActions = trelloSlice.actions;
export default trelloSlice;
