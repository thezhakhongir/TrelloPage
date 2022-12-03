import { configureStore } from "@reduxjs/toolkit";
import trelloSlice from "./reducers/trelloSlice";
import userSlice from "./reducers/logInSlice";
import modalSlice from "./reducers/modalSlice";
export const store = configureStore({
  reducer: {
    trello: trelloSlice.reducer,
    user: userSlice.reducer,
    modal: modalSlice.reducer,
  },
});
