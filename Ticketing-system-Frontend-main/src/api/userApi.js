import axios from "axios";
import { API } from "../global";

const usersigninapi = API + "/users/newuser";
const userloginapi = API + "/users/login";
const userprofileapi = API + "/users";
const userrefreshapi = API + "/tokens";
const userlogoutapi = API + "/users/logout";

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(userloginapi, frmData);
      resolve(res.data);
      if (res.data.status === "success") {
        // console.log(res.data);
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "QueryTicketingSystem",
          JSON.stringify({ refreshJWT: res.data.RefreshJWT })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const userRegistration = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(usersigninapi, frmData);
      resolve(res.data);
      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const accessJWT = sessionStorage.getItem("accessJWT");
        if (!accessJWT) {
          reject("Token not found!");
        }
        const res = await axios.get(userprofileapi, {
          headers: {
            Authorization: accessJWT,
          },
        });  
        resolve(res.data);
      } catch (error) {
        // console.log(error);
        reject(error.message);
      }
    });
  };

  export const fetchNewAccessJWT = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { refreshJWT } = JSON.parse(localStorage.getItem("QueryTicketingSystem"));
        if (!refreshJWT) {
          reject("Token not found!");
        }
        const res = await axios.get(userrefreshapi, {
          headers: {
            Authorization: refreshJWT,
          },
        }); 
        // console.log(res.data);
        if (res.data.status === "Success") {
          sessionStorage.setItem("accessJWT", res.data.accessJWT);
        }
        resolve(res.data);
      } catch (error) {
        if (error.message === "Request failed with status code 403") {
          localStorage.removeItem("QueryTicketingSystem");
        }  
        reject(error);
      }
    });
  };


  export const userLogout = async () => {
    try {
      await axios.delete(userlogoutapi, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
