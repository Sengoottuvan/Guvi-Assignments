import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Button, Form, Input } from "antd";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { userLogin } from "../../api/userApi";
import { getUserProfile } from "../../Redux/auth/userAction";
import {accessusertologin} from "./loginAction";
import "./Login.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Loginpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  // let { from } = location.state || { from: { pathname: "/" } };
 
  const onFinish = async (values) => {
    if (!values.email || !values.password) {
      toast.error('Please Fill the Form and submit!', {
        position: toast.POSITION.TOP_CENTER
    });
		}
		dispatch(loginPending());
		try {
			const isAuth = await userLogin(values);
			if (isAuth.status === "error") {
				return dispatch(loginFail(isAuth.message));
			}
			dispatch(loginSuccess());
			dispatch(getUserProfile());
      message.success("Log In Success");
      setTimeout(()=>{
        navigate("/dashboard");
      },1000);
			
		} catch (error) {
			dispatch(loginFail(error.message));
		}
  };


  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <p className="Title">
          <h1 data-aos="slide-down" data-aos-duration="2000">
            Query Ticketing System
          </h1>
        </p>
      </nav>
      <div className="loginscreen">
        {/* {loading && <CircularIndeterminate />} */}

        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          class="jumbotron1 p-3"
        >
          <h6 class="display-6 text-start">Log in</h6>
          <hr></hr>

          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="textfields">
            <Form
              initialValues={{
                remember: true,
                email: "MERNmentor@gmail.com",
                password: "mentor12345",
              }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Email id"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Enter your Email id!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Enter your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "17px" }}
                >
                  {isLoading ? (
                    <span>
                      <div
                        style={{
                          fontSize: "12px",
                          height: "25px",
                          width: "25px",
                        }}
                        class="spinner-border text-light"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </span>
                  ) : (
                    <span>Log in</span>
                  )}
                </Button>
              </Form.Item>
            </Form>
          </div>
          <p className="d-flex justify-content-between mb-0">
            <p className="text-start">
              <Link className="anchorlink" to="/forget-password">
                <span className="anchorlinkname">Forget Password ?</span>
              </Link>
            </p>{" "}
            <p className="text-end">
              Create Account&nbsp;
              <Link className="anchorlink" to="/signup">
                <span className="anchorlinkname">Sign up</span>
              </Link>
            </p>{" "}
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
