import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  response: "",
};

const userRegestrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    registrationPending: (state) => {
      state.isLoading = true;
    },
    registrationSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.response = payload;
    },
    registrationError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.response = payload;
    },
  },
});

const { reducer, actions } = userRegestrationSlice;

export const {
  registrationPending,
  registrationSuccess,
  registrationError,
} = actions;

export default reducer;