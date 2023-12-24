import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
  isUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.isUser = true;
      state.error = "";
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.isUser = false;
      state.error = payload;
    },
  },
});

export const {
  getUserPending,
  getUserSuccess,
  getUserFail,
} = userSlice.actions;

export default userSlice.reducer;