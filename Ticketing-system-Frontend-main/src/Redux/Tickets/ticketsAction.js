import {
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
} from "./ticketSlice";

import { getAllTickets,getusersAllTickets,getSingleTicket,getmentorsassignedTickets,getmentorSingleTicket,updateReplyTicket,updateTicketStatusAssigned,updateTicketStatusClosed } from "../../api/ticketApi";

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    console.log(result);
    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const fetchusersAllTickets = () => async (dispatch) => {
  dispatch(fetchuserTicketLoading());
  try {
    const result = await getusersAllTickets();
    console.log(result);
    result.data.result.length &&
      dispatch(fetchuserticketlistSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchuserTicketFail(error.message));
  }
};

export const fetchmentorsAllTickets = () => async (dispatch) => {
  dispatch(fetchmentorTicketLoading());
  try {
    const result = await getmentorsassignedTickets();
    console.log(result);
    result.data.result.length &&
      dispatch(fetchmentorticketlistSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchmentorTicketFail(error.message));
  }
};

export const filterSerachTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

//Actions for single ticket only
export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket(_id);
     console.log(result);
    dispatch(
      fetchSingleTicketSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};


export const fetchmentorSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSinglementorTicketLoading());
  try {
    const result = await getmentorSingleTicket(_id);
    //  console.log(result);
    dispatch(
      fetchSinglementorTicketSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSinglementorTicketFail(error.message));
  }
};

export const AssignTickettomentor = (_id) => async (dispatch) => {
  dispatch(upsatestatusTicketLoading());
  try {
    const result = await updateTicketStatusAssigned(_id);
    if (result.status === "error") {
      return dispatch(upsatestatusTicketFail(result.message));
    }
    dispatch(upsatestatusTicketSuccess("Status Updated successfully"));
    setTimeout(()=>{
      window.location.reload();
    },500);    
  } catch (error) {
    console.log(error.message);
    dispatch(upsatestatusTicketFail(error.message));
  }
};

//Actions for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    const result = await updateReplyTicket(_id, msgObj);
    console.log(result);
    if (result.status === "error") {
      return dispatch(replyTicketFail(result.message));
    }
    dispatch(replyTicketSuccess(result.message));
    setTimeout(()=>{
      window.location.reload();
    },1000);
  } catch (error) {
    console.log(error.message);
    dispatch(replyTicketFail(error.message));
  }
};

export const closeTicket = (_id, soln) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    const result = await updateTicketStatusClosed(_id, soln);
    if (result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    }
    dispatch(closeTicketSuccess("Ticket Closed successfully"));
    setTimeout(()=>{
      window.location.reload();
    },1000);
  } catch (error) {
    console.log(error.message);
    dispatch(closeTicketFail(error.message));
  }
};
