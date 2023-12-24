import "bootstrap/dist/css/bootstrap.min.css";
import "../Table/Table.css";
import './userpage.css'
import Navbar from "../Navbar/Navbar";
import React,{useEffect, useState} from "react";
import {useNavigate,Link,useParams, } from "react-router-dom";
import { useFormik } from 'formik';
import toast,{ Toaster } from 'react-hot-toast';
import TextField from "@mui/material/TextField";



export default function EditPage() {
  const navigate=useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  var {id} = useParams();
  const [solution, setSolution] = useState({});
  useEffect(() => {
    getProducts();
  }, [id]);
  const getProducts = () => {
    fetch("https://64a506e800c3559aa9beef5d.mockapi.io/users/" + id,)
      .then((data) => data.json())
      .then((res) => setSolution(res));
  };
  const formik = useFormik({
    initialValues : {
        Firstname :solution?.Firstname||'',
        lastname:solution?.lastname||'',
        Emailid: solution?.Emailid||'',
        Mobileno: solution?.Mobileno||'',
    },
    enableReinitialize: true,
    validate :(values) => {
        let errors = {};
        if (!values.Firstname) {
            errors.Firstname = toast.error("Fill your First Name");
        }else if (!values.lastname) {
            errors.lastname = toast.error("Fill your Last Name");
        }else if (!values.Emailid) {
            errors.Emailid = toast.error("Fill your Email Id");
        } else if (!values.Mobileno) {
            errors.Mobileno = toast.error("Fill your Mobile Number");
        }
        return errors

    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      if (id) {
          fetch("https://64a506e800c3559aa9beef5d.mockapi.io/users/" + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          })
            .then((data) => data.json())
            .then((res) => {
              // console.log(res);
              toast.success("user details Editted Successfully...");
              setTimeout(()=>{
                  navigate('/Table');
              },3000);
            });

          }
  }
});
  return (
    <div>
      <Navbar />
      <div className="row Tablecontent">
        <div class="text-center mt-3">
          <div class="cardfortable card shadow mb-2">
            <div className="card-body">
            <button onClick={goBack} style={{color:"red",border:"none",backgroundColor:"white"}}>
          &lt;&lt; Back 
        </button>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
    <div
      class="jumbotron1 p-3"
    >
      <h6 class="display-6 text-center">Edit User</h6>
      <hr></hr>
      <div className="textfields">
      <form className='py-1' onSubmit={formik.handleSubmit}>
 
 <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>First Name</label></div>
                      <div> <TextField
                      id="Firstname"
                      label="First Name"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('Firstname')} 
                    />
                    </div>
                    </div>
                    <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Last Name</label></div>
                      <div> <TextField
                      id="lastname"
                      label="Last Name"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('lastname')} 
                    />
                    </div>
                    </div>
                    <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Email id</label></div>
                      <div> <TextField
                      id="Emailid"
                      label="Email id"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('Emailid')} 
                    />
                    </div>
                    </div>
                    <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}}className="text-start"><label>Mobile Number</label></div>
                      <div> <TextField
                      id="Mobileno"
                      label="Mobileno"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('Mobileno')} 
                    />
                    </div>
                    </div>
              <div style={{display:"flex",justifyContent:"center"}}><button className="createproductbutton" style={{border:"none",color:"white",backgroundColor:"blueviolet",padding:"5px",margin:"10px",borderRadius:"5px",fontSize:"22px",fontWeight:"500"}} type='submit'><span>Edit</span></button></div>
          </form>
      </div>
    </div>
  </div>

          </div>
        </div>
      </div>
    </div>
  );
}
