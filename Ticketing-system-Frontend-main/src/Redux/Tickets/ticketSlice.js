import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets: [],
    isLoading: false,
    error: "",
    ticketstatus:false,
    ticketstatusmsg:"",
    replyTicketError: "",
    searchTicketList: [],
    mentorTicketList:[],
    selectedTicket: {},
    mentorTicket:{},
    replyMsg: "",
    ticketreply:false,
  };

const ticketListSlice = createSlice({
 name:'ticketlist',
 initialState,
 reducers:{
    fetchTicketLoading:(state)=>{
        state.isLoading = true;
    },
    fetchTicketSuccess:(state,action)=>{
        state.tickets = action.payload;
        state.isLoading = false;
    },
    fetchTicketFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
      searchTickets: (state, { payload }) => {
        state.searchTicketList = state.tickets.filter((row) => {
          if (!payload) return row;
          return row.title.toLowerCase().includes(payload.toLowerCase());
        });
      },
      fetchSingleTicketLoading: (state) => {
        state.isLoading = true;
      },
      fetchSingleTicketSuccess: (state, { payload }) => {
        state.selectedTicket = payload;
        state.isLoading = false;
        state.error = "";
      },
      fetchSingleTicketFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
      fetchuserTicketLoading: (state) => {
        state.isLoading = true;
      },
      fetchuserticketlistSuccess: (state, { payload }) => {
        state.searchTicketList = payload;
        state.isLoading = false;
        state.error = "";
      },
      fetchuserTicketFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
      fetchmentorTicketLoading: (state) => {
        state.isLoading = true;
      },
      fetchmentorticketlistSuccess: (state, { payload }) => {
        state.mentorTicketList = payload;
        state.isLoading = false;
        state.error = "";
      },
      fetchmentorTicketFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
      fetchSinglementorTicketLoading: (state) => {
        state.isLoading = true;
      },
      fetchSinglementorTicketSuccess: (state, { payload }) => {
        state.mentorTicket = payload;
        state.isLoading = false;
        state.error = "";
      },
      fetchSinglementorTicketFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
      upsatestatusTicketLoading: (state) => {
        state.ticketstatus = true;
      },
      upsatestatusTicketSuccess: (state, { payload }) => {
        state.ticketstatus = false;
        state.error = "";
        state.replyMsg = payload;
      },
      upsatestatusTicketFail: (state, { payload }) => {
        state.ticketstatus = false;
        state.error = payload;
      },
      closeTicketLoading: (state) => {
        state.ticketstatus = true;
      },
      closeTicketSuccess: (state, { payload }) => {
        state.ticketstatus = false;
        state.error = "";
        state.ticketstatusmsg = payload;
      },
      closeTicketFail: (state, { payload }) => {
        state.ticketstatus = false;
        state.error = payload;
      },
      replyTicketLoading: (state) => {
        state.ticketreply = true;
      },
      replyTicketSuccess: (state, { payload }) => {
        state.ticketreply = false;
        state.error = "";
        state.replyMsg = payload;
      },
      replyTicketFail: (state, { payload }) => {
        state.ticketreply = false;
        state.replyTicketError = payload;
      },
 },
  });

  const { reducer, actions } = ticketListSlice;

  export const {
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail,
    searchTickets,
    fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  fetchuserTicketLoading,
  fetchuserticketlistSuccess,
  fetchuserTicketFail,
  fetchmentorTicketLoading,
  fetchmentorticketlistSuccess,
  fetchmentorTicketFail,
  fetchSinglementorTicketLoading,
  fetchSinglementorTicketSuccess,
  fetchSinglementorTicketFail,
  upsatestatusTicketLoading,
  upsatestatusTicketSuccess,
  upsatestatusTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
closeTicketFail,
closeTicketSuccess,
  } = actions;
  
  export default reducer;