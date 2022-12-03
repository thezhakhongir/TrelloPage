import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInfoModalShow: false,
  isEditModalShow: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showInfoModal(state, action) {
      state.isInfoModalShow = !state.isInfoModalShow;
    },
    hideInfoModal(state, action) {
      state.isInfoModalShow = !state.isInfoModalShow;
    },
    showEditModal(state, action) {
      state.isEditModalShow = !state.isEditModalShow;
    },
    hideEditModal(state, action) {
      state.isEditModalShow = !state.isEditModalShow;
    },
  },
});

export const { showInfoModal, hideInfoModal, showEditModal, hideEditModal } =
  modalSlice.actions;
export default modalSlice;
