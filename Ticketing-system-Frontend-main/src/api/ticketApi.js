import axios from "axios";
import { API } from "../global";

const allticketsUrl= API+ "/tickets/alltickets";
const newticketUlr = API + "/tickets/addnewticket";
const userTicketUrl = API + "/tickets/usertickets";
const specificticketUrl= API + "/tickets/gettickets/";
const singlementorticketUrl= API + "/tickets/getmentortickets/"
const statusassignUrl= API + "/tickets/assign-ticket/";
const mentorsticketstatusassignedUrl= API + "/tickets/mentortickets";
const replyticketUrl= API + "/tickets/reply-ticket/";
const closeticketUrl=API+"/tickets/close-ticket/";


export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(allticketsUrl, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }); 
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  export const getusersAllTickets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(userTicketUrl, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }); 
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  export const getmentorsassignedTickets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(mentorsticketstatusassignedUrl, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }); 
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  export const getSingleTicket = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(specificticketUrl + _id, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        });
  
        resolve(result);
      } catch (error) {
        // console.log(error.message);
        reject(error);
      }
    });
  };

  export const getmentorSingleTicket = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(singlementorticketUrl + _id, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        });
  
        resolve(result);
      } catch (error) {
        // console.log(error.message);
        reject(error);
      }
    });
  };

  export const getSingletoassignTicket = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.put(statusassignUrl + _id, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        });
        resolve(result);
      } catch (error) {
        // console.log(error.message);
        reject(error);
      }
    });
  };

  export const createNewTicket = (frmData) => {
    // console.log("from api", frmData);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.post(newticketUlr, frmData, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        });
        resolve(result.data);
      } catch (error) {
        // console.log(error.message);
        reject(error);
      }
    });
  };

  export const updateTicketStatusAssigned = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.put(
          statusassignUrl + _id,
          {},
          {
            headers: {
              Authorization: sessionStorage.getItem("accessJWT"),
            },
          }
        );
  
        resolve(result.data);
      } catch (error) {
        // console.log(error.message);
        reject(error);
      }
    });
  };

  export const updateReplyTicket = (_id, msgObj) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.put(replyticketUrl + _id, msgObj, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }); 
        resolve(result.data);
      } catch (error) {
        // console.log(error.message);
        reject(error);
      }
    });
  };

  export const updateTicketStatusClosed = (_id,soln) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.patch(
          closeticketUrl + _id, soln,
          {
            headers: {
              Authorization: sessionStorage.getItem("accessJWT"),
            },
          }
        );  
        resolve(result.data);
      } catch (error) {
        // console.log(error.message);
        reject(error);
      }
    });
  };