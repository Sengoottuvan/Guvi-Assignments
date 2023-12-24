import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { userLogin,userRegistration } from "../../api/userApi";
import { message } from "antd";

export const accessusertologin = (values) => async (dispatch) => {
    dispatch(loginPending());
    try {
      const isAuth = await userLogin(values);
      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }
      if(isAuth.status==="success"){
        dispatch(loginSuccess());
        message.success(`${isAuth.message} 😊`);
        window.location.href="/dashboard";
      } 
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  


