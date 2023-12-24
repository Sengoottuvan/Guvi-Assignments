import "bootstrap/dist/css/bootstrap.min.css";
import "../Table/Table.css";
import Navbar from "../Navbar/Navbar";
import React,{useEffect, useState} from "react";
import {useNavigate,Link,useParams, } from "react-router-dom";
import { useFormik } from 'formik';
import toast,{ Toaster } from 'react-hot-toast';
import TextField from "@mui/material/TextField";




export default function StudentEditPage() {
    const navigate=useNavigate();
    const goBack = () => {
      navigate(-1);
    };
    var {id} = useParams();
    const [solution, setSolution] = useState({});
    const [userData, setUserData] = useState([]);
    useEffect(() => {
      getProducts();
    }, [id]);
    const getProducts = () => {
      fetch("https://64a67bae096b3f0fcc7fddb1.mockapi.io/students/" + id,)
        .then((data) => data.json())
        .then((res) => setSolution(res));
    };
    useEffect(() => {
        fetch("https://64a67bae096b3f0fcc7fddb1.mockapi.io/mentors")
          .then((data) => data.json())
          .then((response) => setUserData(response));
      }, []);
    //   console.log(userData);
  const formik = useFormik({
    initialValues : {
        studentname :solution?.studentname||'',
        eamilid:solution?.eamilid||'',
        Course: solution?.Course||'',
        mentername: solution?.mentername||"",
    },
    enableReinitialize: true,
    validate :(values) => {
        let errors = {};
        if (!values.studentname) {
            errors.studentname = toast.error("Please Mention your Full Name");
        }else if (values.studentname.length<3) {
            errors.studentname = toast.error("Name Should be atleast 3 Characters");
        }
        else if (!values.eamilid) {
            errors.eamilid = toast.error("Please Mention your Email Id");
        }
        else if (!values.Course) {
            errors.Course = toast.error("Please Mention the course");
        }else if (!values.mentername) {
            errors.mentername = toast.error("Mention Mentor For Student");
        }
        return errors

    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
        values = await Object.assign(values, { mentorassign : true,mentername:values.mentername});
        console.log(values);  
        if(id){
        fetch("https://64a67bae096b3f0fcc7fddb1.mockapi.io/students/" + id, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(values)
            })
              .then((data) => data.json())
              .then((res) => {
                // console.log(res);
                toast.success("Students details Editted Successfully...");
                setTimeout(()=>{
                    navigate('/studentslist');
                },2000);
              });
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
       <div style={{display:"flex",justifyContent:"start"}}><button onClick={goBack} style={{color:"red",border:"none",backgroundColor:"yellow",display:"flex"}}>
          &lt;&lt; Back 
        </button></div> 
      <h6 class="display-6 text-center">Assign Mentors for Students here</h6>
      <hr></hr>
      <div className="textfields">
      <form className='py-1' onSubmit={formik.handleSubmit}>
 
 <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Student Name</label></div>
                      <div> <TextField
                      id="studentname"
                      label="Full Name"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('studentname')} 
                    />
                    </div>
                    </div>
                    <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Student Email</label></div>
                      <div> <TextField
                      id="eamilid"
                      label="Email id"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('eamilid')} 
                    />
                    </div>
                    </div>
                    <div style={{margin:"2%"}}>
           <div style={{marginBottom:"1%"}} className="text-start"><label>Student's current Course</label></div>
                      <div> 
                      <select
                name="category"
                className="text-center"
                style={{ marginBottom: "2px", width: "100%",height:"20px", display: "flex", color: "black" }}
                {...formik.getFieldProps('Course')} 
              >
                <option value="" disabled>---Select Course---</option>
                <option value="Ui/Ux">Ui/Ux</option>
                <option value="Data Science">Data Science</option>
                <option value="React Development">React Development</option>
                <option value="Python">Python</option>
                <option value="MERN Stack Development">MERN Stack Development</option>
                <option value="Full Stack Development">Full Stack Development</option>                
              </select>
                    </div>
                    </div>
                    <div style={{margin:"2%"}}>
           <div style={{marginBottom:"1%"}} className="text-start"><label>Assign Mentor</label></div>
                      <div> 
                      <select
                name="category"
                className="text-center"
                style={{ marginBottom: "2px", width: "100%",height:"20px", display: "flex", color: "black" }}
                {...formik.getFieldProps('mentername')}     
              >
                <option value="" disabled>---Select Mentor---</option>
                {userData.map((val)=>{
                     return( <option value={val.name}>Mentor Name: {val.name} <span style={{color:"red"}}>Specialization : {val.Specialization}</span></option>)
                })}       
              </select>
                    </div>
                    </div>
              <div style={{display:"flex",justifyContent:"center"}}><button className="createproductbutton" style={{border:"none",color:"white",backgroundColor:"blueviolet",padding:"5px",margin:"10px",borderRadius:"5px",fontSize:"22px",fontWeight:"500",display:"flex"}} type='submit'><span>Edit</span></button></div>
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
