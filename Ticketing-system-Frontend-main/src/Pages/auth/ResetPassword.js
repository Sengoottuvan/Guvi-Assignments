import React , {useState}from "react";
import './Login.css';
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {message} from "antd";
import TextField from "@mui/material/TextField";
import {updatePassword} from './PasswordresetAction';
import AOS from "aos";
import {RxCross2} from 'react-icons/rx';
import {TiTick} from 'react-icons/ti';
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function Resetpasswordpage() {
    const passVerificationError = {
        isLenthy: false,
        hasLower: false,
        hasNumber: false,
        hasSpclChr: false,
        confirmPass: false,
      };
      const dispatch = useDispatch();
      const [passwordError, setPasswordError] = useState(passVerificationError);
      const navigate=useNavigate();
      const [form, setForm] = useState({});
      const [testing, settesting] = useState("");
      const [testingcp, settestingcp] = useState("");
      const { isLoading, status, replymsg, email } = useSelector(
		state => state.password
	);
      function handleInput(e) {
        const {id,value}=e.target;
          const formCopy = {
            ...form,
            [id]: value,
          };
          setForm(formCopy);  
          if (id === "newPassword") {
            const isLenthy = value.length > 8;
            const hasLower = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSpclChr = /[@,#,$,%,&]/.test(value);     
            setPasswordError({
              ...passwordError,
              isLenthy,
              hasLower,
              hasNumber,
              hasSpclChr,
            });
          }
          if (id === "confirmpassword") {
            setPasswordError({
              ...passwordError,
              confirmpassword: form.newPassword === value,
            });
          }
          settesting(document.getElementById("newPassword").value);
          settestingcp(document.getElementById("confirmpassword").value);
      }

      function validatetextboxes() {
      const { pin, newPassword } = form;
      const newPassObj = {
          pin,
          newPassword,
          email,
      };
    //   console.log(newPassObj);
      dispatch(updatePassword(newPassObj));
      message.success("Your Password is updated Successfully");
      setTimeout(() => {
        navigate("/");
      }, 5000);
        }


    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light"><p className="Title"><h1 data-aos="slide-down" 
                  data-aos-duration="2000">Query Ticketing System</h1></p></nav>
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
             <TextField
                  required
                  id="pin"
                  label="OTP"
                  variant="outlined"
                  sx={{ width: "100%", display: "flex", color: "black", my:3 }}
                  value={form && form["pin"]}
                  onChange={handleInput}
                />
                <TextField
                  required
                  id="newPassword"
                  label="Password"
                  type="password"
                  name="newPassword"
                  autoComplete="current-password"
                  sx={{
                    display: "flex",
                    width: "100%",
                    my:3,
                  }}
                  value={form && form["newPassword"]}
                  onChange={handleInput}
                />
                <TextField
                  required
                  id="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  sx={{
                    display: "flex",
                    width: "100%",
                    my:3,
                  }}
                  value={form && form["confirmpassword"]}
                  onChange={handleInput}
                />
                {testingcp.length>0 ? (!passwordError.confirmpassword ? (
                <div className="text-danger">Password doesn't matching!</div>
              ):(
                <div className="text-success">Password matching</div>
              )):""}

 {testing.length>0 && 
   <div style={{textAlign:"start"}}>
<div style={{color:"blue"}}>Requirements</div>
 <ul className="mb-4" style={{listStyle:"none"}}>
              <li
                className={
                  passwordError.isLenthy ? "text-success" : "text-danger"
                }
              >
              <span>{passwordError.isLenthy?<span style={{color:"green"}}><TiTick/></span>:<span style={{color:"red"}}><RxCross2/></span>}</span>  Min 8 characters
              </li>
              <li
                className={
                  passwordError.hasLower ? "text-success" : "text-danger"
                }
              >
               <span>{passwordError.hasLower?<span style={{color:"green"}}><TiTick/></span>:<span style={{color:"red"}}><RxCross2/></span>}</span> At least one lower case
              </li>
              <li
                className={
                  passwordError.hasNumber ? "text-success" : "text-danger"
                }
              >
               <span>{passwordError.hasNumber?<span style={{color:"green"}}><TiTick/></span>:<span style={{color:"red"}}><RxCross2/></span>}</span> At least one number
              </li>
              <li
                className={
                  passwordError.hasSpclChr ? "text-success" : "text-danger"
                }
              >
               <span>{passwordError.hasSpclChr?<span style={{color:"green"}}><TiTick/></span>:<span style={{color:"red"}}><RxCross2/></span>}</span> At least one of the special characters i.e @ # $ % &
              </li>
            </ul></div>} 

            <p className="text-center Registerbutton">
                  <button onClick={validatetextboxes} type="button" class="btn btn-primary Registerbutton" disabled={!form.pin || !form.newPassword}>{isLoading ? <div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<>Change Password</>}</button>
                </p>

              </div>
</div>

      </div>

        </>
    );
}
