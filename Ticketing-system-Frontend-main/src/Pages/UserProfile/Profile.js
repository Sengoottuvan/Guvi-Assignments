import React, {useEffect,useState  } from "react";
import Defaultpage from "../../Components/Defaultpage";
import Footertab from "../../Components/Footer";
import './profile.css';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate,Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Space, Spin } from 'antd';


export default function Userprofile() {

  const { user,isLoading } = useSelector((state) => state.user);
     
    const [form, setForm] = useState({});
    function handleInput(e) {
      if (e) {
        const formCopy = {
          ...form,
          [e.target.id]: e.target.value,
        };
        setForm(formCopy);
      }
    }  
    function validatetextboxes(){
      toast.info('Changes Saved', {
        position: toast.POSITION.TOP_CENTER
    });
          if(form){
            console.log(form);
          }      
    }
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    };

return( <><Defaultpage>
  <div style={{display:"flex",justifyContent:"start", margin:"5px"}}><button onClick={goBack} style={{color:"blueviolet",border:"2px solid blueviolet",borderRadius:"7px",padding:"5px",marginLeft:"10px",backgroundColor:"white",fontSize:"20px",fontWeight:"500"}}>&lt;&nbsp;&nbsp;Back&nbsp;&nbsp;</button></div>
   <div style={{color:"blue",fontSize:"30px"}}>User Profile</div> 
   {isLoading ? <><p style={{display:"flex",alignItems:"center",justifyContent:"center",height:"75vh"}}> <Space size="middle">
    <Spin size="large" color="red" />
  </Space></p></> : 
   <div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <div class="jumbotron3">
      <div style={{margin: "2%"}}>
      <div className="d-flex justify-content-between"> 
      <p style={{margin:"1px", fontSize:"18px",color: "blue", fontWeight:400, display:"flex", alignItems:"center", marginLeft:"5px"}}>Name: </p>
    <TextField
                  required
                  id="firstname"
                  type="text"
                  name="firstname"
                  sx={{
                    display: "flex",
                    width: "80%",
                    m:2,
                    fontSize: 40
                  }}
                  value={form && form["firstname"]}
                  onChange={handleInput}
                  defaultValue={user.firstname}
                /></div>
                <div className="d-flex justify-content-between"> 
      <p style={{margin:"1px", fontSize:"18px",color: "blue", fontWeight:400, display:"flex", alignItems:"center", marginLeft:"5px"}}>Phone No: </p>
    <TextField
                  required
                  id="mobile"
                  type="text"
                  name="mobile"
                  sx={{
                    display: "flex",
                    width: "80%",
                    m:2,
                    fontSize: 40
                  }}
                  value={form && form["mobile"]}
                  defaultValue={user.mobile}
                  onChange={handleInput}
                /></div>
                <div className="d-flex justify-content-between"> 
      <p style={{margin:"1px", fontSize:"18px",color: "blue", fontWeight:400, display:"flex", alignItems:"center", marginLeft:"5px"}}>Email: </p>
    <TextField
                  required
                  id="email"
                  type="text"
                  name="email"
                  sx={{
                    display: "flex",
                    width: "80%",
                    m:2,
                    fontSize: 40
                  }}
                  disabled
                  value={form && form["email"]}
                  defaultValue={user.email}
                  onChange={handleInput}
                /></div>
                <div className="d-flex justify-content-between"> 
      <p style={{margin:"1px", fontSize:"18px",color: "blue", fontWeight:400, display:"flex", alignItems:"center", marginLeft:"5px"}}>Batch: </p>
    <TextField
    disabled
                  required
                  id="batch"
                  type="text"
                  name="batch"
                  sx={{
                    display: "flex",
                    width: "80%",
                    m:2,
                    fontSize: 40
                  }}
                  defaultValue="Batch is not yet allocated"
                  value={form && form["batch"]}
                  onChange={handleInput}
                /></div>
</div>

</div>
</div>

<div style={{display:"flex",justifyContent:"center"}}>
    <div class="jumbotron3">
      <div style={{margin: "2%"}}>
      <div className="d-flex justify-content-between"> 
      <p style={{margin:"1px", fontSize:"18px",color: "blue", fontWeight:400, display:"flex", alignItems:"center", marginLeft:"5px"}}>Qualification: </p>
    <TextField
    placeholder="Ex: B.E.DEPARTMENT "
                  required
                  id="Qualification"
                  type="text"
                  name="Qualification"
                  sx={{
                    display: "flex",
                    width: "80%",
                    m:2,
                    fontSize: 40
                  }}
                  value={form && form["Qualification"]}
                  onChange={handleInput}
                /></div>
                <div className="d-flex justify-content-between"> 
      <p style={{margin:"1px", fontSize:"18px",color: "blue", fontWeight:400, display:"flex", alignItems:"center", marginLeft:"5px"}}>Year of Passing: </p>
    <TextField
                  required
                  id="Year of Passing"
                  type="text"
                  name="Year of Passing"
                  sx={{
                    display: "flex",
                    width: "80%",
                    m:2,
                    fontSize: 40
                  }}
                  value={form && form["Year of Passing"]}
                  onChange={handleInput}
                /></div>
                <div className="d-flex justify-content-between"> 
      <p style={{margin:"1px", fontSize:"18px",color: "blue", fontWeight:400, display:"flex", alignItems:"center", marginLeft:"5px"}}>Year of Experience: </p>
    <TextField
                  required
                  id="Year of Experience"
                  type="text"
                  name="Year of Experience"
                  sx={{
                    display: "flex",
                    width: "80%",
                    m:2,
                    fontSize: 40
                  }}
                  value={form && form["Year of Experience"]}
                  onChange={handleInput}
                /></div>
                <div className="d-flex justify-content-between"> 
      <p style={{margin:"1px", fontSize:"18px",color: "blue", fontWeight:400, display:"flex", alignItems:"center", marginLeft:"5px"}}>Notice Period: </p>
    <TextField
    placeholder="in Days"
                  required
                  id="Notice Period"
                  type="text"
                  name="Notice Period"
                  sx={{
                    display: "flex",
                    width: "80%",
                    m:2,
                    fontSize: 40
                  }}
                  value={form && form["Notice Period"]}
                  onChange={handleInput}
                /></div>
</div>

</div>



</div>

<div style={{display:"flex",justifyContent:"center"}}>
    <div class="jumbotron4">
    <div style={{display:"flex", justifyContent:"end", alignItems:"center", margin:"2%"}}><button style={{backgroundColor:"blue",border:"none",borderRadius:"5px", color:"white",fontSize:"25px", fontWeight:"500",padding:"1%"}} onClick={validatetextboxes}>Save Changes</button></div>
</div>
</div>
</div> }
<ToastContainer/>
</Defaultpage>
<Footertab/>
</>
);
}

