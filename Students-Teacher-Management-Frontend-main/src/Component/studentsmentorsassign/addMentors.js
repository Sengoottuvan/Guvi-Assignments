import "bootstrap/dist/css/bootstrap.min.css";
import "../Table/Table.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import React,{useEffect, useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import { useFormik } from 'formik';
import toast,{ Toaster } from 'react-hot-toast';
import TextField from "@mui/material/TextField";


export default function MentorRegisterPage() {
    const navigate=useNavigate();
    const goBack = () => {
        navigate(-1);
      };
  const formik = useFormik({
    initialValues : {
        name :'',
        emailid:'',
        Specialization: '',
    },
    enableReinitialize: true,
    validate :(values) => {
        let errors = {};
        if (!values.name) {
            errors.name = toast.error("Please Mention your Full Name");
        }else if (values.name.length<3) {
            errors.name = toast.error("Name Should be atleast 3 Characters");
        }
        else if (!values.emailid) {
            errors.emailid = toast.error("Please Mention your Email Id");
        }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.emailid))){
            errors.emailid = toast.error("Valid Email Id Required");
        }
        else if (!values.Specialization) {
            errors.Specialization = toast.error("Please Mention the Specialization on Course");
        }
        return errors

    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
     values = await Object.assign(values, { mentorid : " ",studentassigned: false});
    //  console.log(values);
     try {
      await axios.post("https://mentor-student-assign.onrender.com/mentors/addmentor", values)
      toast.success("Mentor Registered Successfully");
      setTimeout(()=>{
        navigate('/mentorslist');
    },2000);
  } catch (error) {
      console.log(error)
  }      
    }
  })

  return (
    <div>
      <Navbar />
      <div className="row Tablecontent">
        <div class="text-center mt-3">
          <div class="cardfortable card shadow mb-2">
            {/* <div class="card-header py-2 text-center">
              {" "}
              <h4>Student Register Form</h4>
            </div> */}
            <div className="card-body">

           
            <Toaster position='top-center' reverseOrder={false}></Toaster>
    <div
      class="jumbotron1 p-3"
    >
          <button onClick={goBack} style={{color:"red",border:"none",backgroundColor:"white"}}>
          &lt;&lt; Back 
        </button>
      <h6 class="display-6 text-center">Mentor Register Form</h6>
      <hr></hr>
      <div className="textfields">
      <form className='py-1' onSubmit={formik.handleSubmit}>
 
 <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Mentor Name</label></div>
                      <div> <TextField
                      id="name"
                      label="Full Name"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('name')} 
                    />
                    </div>
                    </div>
                    <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Mentor Email</label></div>
                      <div> <TextField
                      id="emailid"
                      label="Email id"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('emailid')} 
                    />
                    </div>
                    </div>
                    <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Specialization</label></div>
                      <div> 
                      <select
                name="category"
                className="text-center"
                style={{ marginBottom: "5px", width: "100%",height:"20px", display: "flex", color: "black" }}
                {...formik.getFieldProps('Specialization')} 
              >
                <option value="" disabled>---Select Specialization---</option>
                <option value="Ui/Ux">Ui/Ux</option>
                <option value="Data Science">Data Science</option>
                <option value="React Development">React Development</option>
                <option value="Python">Python</option>
                <option value="MERN Stack Development">MERN Stack Development</option>
                <option value="Full Stack Development">Full Stack Development</option>                
              </select>
                    </div>
                    </div>
              <div style={{display:"flex",justifyContent:"center"}}><button className="createproductbutton" style={{border:"none",color:"white",backgroundColor:"blueviolet",padding:"5px",margin:"10px",borderRadius:"5px",fontSize:"22px",fontWeight:"500",display:"flex"}} type='submit'><span>Submit</span></button></div>
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