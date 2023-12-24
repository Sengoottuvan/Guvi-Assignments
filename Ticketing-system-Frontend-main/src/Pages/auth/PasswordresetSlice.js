import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	replymsg: "",
	showUpdatePassForm: false,
	email: "",
};
const passwordReset = createSlice({
	name: "passwordReset",
	initialState,
	reducers: {
		otpReqPending: state => {
			state.isLoading = true;
		},
		otpReqSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = "success";
			state.replymsg = payload.message;
			state.email = payload.email;
			state.showUpdatePassForm = true;
		},
		updatePassSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = "success";
			state.replymsg = payload;
		},
		otpReqFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = "error";
			state.replymsg = payload;
		},
	},
});

const { reducer, actions } = passwordReset;

export const {
	otpReqPending,
	otpReqSuccess,
	otpReqFail,
	updatePassSuccess,
} = actions;
export default reducer;