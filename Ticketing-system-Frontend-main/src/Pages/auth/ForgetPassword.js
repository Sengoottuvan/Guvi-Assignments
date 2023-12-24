import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input,message} from "antd";
import { sendPasswordResetOtp } from "./PasswordresetAction";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function Forgetpasswordpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, status, replymsg } = useSelector((state) => state.password);

  const onFinish = (values) => {
    if (values.email) {
      dispatch(sendPasswordResetOtp(values.email));
      message.success("We have sent a 6 digit otp to your Email id");
      setTimeout(() => {
        navigate("/reset-password");
      }, 5000);
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
        <div class="jumbotron1 p-3">
          <h6 class="display-6 text-start">Reset Password</h6>
          <hr></hr>

          <div className="textfields">
            {replymsg && (
              <div
                class={
                  status === "success"
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
              >
                {replymsg}
              </div>
            )}
            <Form
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Email id"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please Enter a valid Email id!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {isLoading ? (
                    <div class="spinner-border text-light" role="status">
                      <span class="sr-only"></span>
                    </div>
                  ) : (
                    <span>Send OTP</span>
                  )}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Reset-Password</h5>
        <span type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className="closebuttonx">X</span>
        </span>
      </div>
      <div class="modal-body">
        We have sent an OTP message to your Email id
      </div>
    </div>
  </div>
</div>  */}
    </>
  );
}
