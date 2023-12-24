import React, {useEffect,useState  } from "react";
import Defaultpage from "../../Components/Defaultpage";
import Footertab from "../../Components/Footer";
import './query.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate,Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {BsPlusSquare} from 'react-icons/bs';
import {AiOutlineExclamationCircle}  from "react-icons/ai";
import {message} from "antd";
import AOS from "aos";
import MultiSelect from 'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';
import {openNewTicket} from "./addTicketAction";
import {createNewTicket} from '../../api/userApi';
import {restSuccessMSg} from "./addTicketSlicer";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Createquery() {
      const tags=['html','css','javaScript','React','node js','mongodb','JS','browser','DOM','HTTP methods','array','Json','Objects','hoisting','Scopeblock','functions','Xml HTTP request','API request','IIFE','Arrow Functions','anonymous Functions','Destructuring','es5','es6','array Destructure','this Keyword','OOPS','array methods','forms','css Selector','box modal','media query','bootstrap','Rwd','callback','callback hell','promise','fetch api','async','await','MySql','Frontend','Backend'];
    const tagsoptions = [];
    const dispatch = useDispatch();
    // const {
    //   user: { name },
    // } = useSelector((state) => state.user);
    const { isLoading,error,successMsg } = useSelector((state) => state.openticket);
  
    useEffect(() => {
      return () => {
        successMsg && dispatch(restSuccessMSg());
      };
    }, [dispatch]);
    // category
    // subCategory
    // tags
    // preferredLanguage
    // title
    // description
    // availableTimefrom
    // availableTimetill
    // file
    // rasiedBy


for (let i = 0; i < tags.length; i++) {
  tagsoptions.push({
    value: tags[i],
    label: tags[i],
  });
}
const [tagvalue, settagvalue] = useState()

  const  handleOnchange  =  val  => {
      settagvalue(val);
  }
      const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    };
    const [form, setForm] = useState({});
    const [image, Setimage] = useState(false);
    function handleInput(e) {
      e.preventDefault();
      if (e) {
        const formCopy = {
          ...form,
          [e.target.id]: e.target.value,
        };
        setForm(formCopy);
      }
    }  
    function validatetextboxes(){
      if(!form.category && !form.preferredLanguage && !form.title && !form.description && !form.availableTimefrom && !form.availableTimetill){
            toast.error('Fill Your Query form and Submit', {
              position: toast.POSITION.TOP_CENTER
          });
          }
          else if(!form.category){
            toast.warning('Select Your Category!', {
              position: toast.POSITION.TOP_CENTER
          });
          }
          else if(!form.preferredLanguage){
            toast.warning('Select Your Preferred Language !', {
              position: toast.POSITION.TOP_CENTER
          });
          }
          else if(!form.title){
            toast.warning('Please Enter Your Query Title !', {
              position: toast.POSITION.TOP_CENTER
          });
          }
          else if(!form.description){
            toast.warning('Please Enter Your Query Description!', {
              position: toast.POSITION.TOP_CENTER
          });
          }
          else if(!form.availableTimefrom || !form.availableTimetill ){
            toast.error('Select Your Avalaible Time', {
              position: toast.POSITION.TOP_CENTER
          });
          }
          else{
            if(tagvalue){
              form.tags=tagvalue;
            }

            dispatch(openNewTicket(form));  
          }          
         message.success('Your query is registered, Please wait untill mentor to take up this query!')
  setTimeout(()=>{
    window.location.href="/myqueries";
  },2000);
        
    }


return( <><Defaultpage>
 
 <div className="divcreatequery text-start">
        <button onClick={goBack} className="backbutton buttonavigate ">
          &lt;&nbsp;&nbsp;<span className="Backbuttoncreatequery">Back&nbsp;&nbsp;</span>
        </button>
      </div>

      <div className="Createqueryformfill text-center">
      <div class="jumbotron2">
      <h6 class="display-6">List your queries here.</h6>
  <hr></hr>
  {successMsg && <div class="alert alert-success" role="alert">
 {successMsg}
</div>
}
              <div className="textfields">
       <div className="text-start ml-2 topicnames">Topic</div>
 
 {/* Select category */}
 <div className="">
 <div className="labelnames">Category </div>
 <div>
  <select  name="category" className="categoryselect text-center"
                id="category" value={form && form["category"]} onChange={handleInput}>
                    <option disabled selected value>--select Category--</option>
    <option value="Zen-Class Doubt">Zen-Class Doubt</option>
    <option value="Placement Related">Placement Related</option>
    <option value="Coordination Related">Coordination Related</option>
    <option value="Pre-bootcamp Related">Pre-bootcamp Related</option>
  </select>
  </div>
  </div>

  {/* Sub cateory */}
  {form.category && form.category=='Zen-Class Doubt' ? <> <div className="labelnames2">Subcategory </div>
   <select  name="subCategory" className="categoryselect text-center"
   id="subCategory" value={form && form["subCategory"]} onChange={handleInput}>
       <option value="null">--select an option--</option>
         <option value="Task">Task</option>
<option value="Web Code">Web Code</option>
<option value="Class Topic">Class Topic</option>
<option value="WebKata">WebKata</option>
<option value="CodeKata">CodeKata</option>
<option value="Assessment">Assessment</option>
</select> 
</>: ""}

{ form.category && form.category=='Zen-Class Doubt' && form.subCategory && form.subCategory=='Task' || form.subCategory=='Web Code' || form.subCategory=='Class Topic'?<>
<div className="labelnames2">Tags <MultiSelect className='multipleselect'
        onChange={handleOnchange}
        options={tagsoptions}
        style={{width:"100%"}}
      /></div>
  </>
 : ''
}

{form.category && form.category=='Placement Related' ? <> <div className="labelnames2">Subcategory </div>
   <select  name="subCategory" className="categoryselect text-center"
   id="subCategory" value={form && form["subCategory"]} onChange={handleInput}>
       <option  value="null">--select an option--</option>
         <option value="Company Info">Company Info</option>
<option value="Completion Certificate">Completion Certificate</option>
<option value="Portfolio">Portfolio</option>
</select> 
</>: ""}

{form.category && form.category=='Coordination Related' ? <> <div className="labelnames2">Subcategory </div>
   <select  name="subCategory" className="categoryselect text-center"
   id="subCategory" value={form && form["subCategory"]} onChange={handleInput}>
       <option  value="null">--select an option--</option>
         <option value="Session Timing">Session Timing</option>
<option value="Session Joining Link">Session Joining Link</option>
<option value="Session Feedback">Session Feedback</option>
<option value="Completion Certifiate">Completion Certifiate</option>
<option value="Payment">Payment</option>
</select> 
</>: ""}

{form.category && form.category=='Pre-bootcamp Related' ? <> <div className="labelnames2">Subcategory </div>
   <select  name="subCategory" className="categoryselect text-center"
   id="subCategory" value={form && form["subCategory"]} onChange={handleInput}>
       <option  value="null">--select an option--</option>
         <option value="Session">Session</option>
<option value="Payment">Payment</option>
<option value="WebKata">WebKata</option>
<option value="CodeKata">CodeKata</option>
<option value="Pre-bootcamp Task">Pre-bootcamp Task</option>
<option value="Others">Others</option>
</select> 
</>: ""}
{/* preferredLanguage */}
<div className="labelnames2">Preferred Language</div>
 <div>
  <select  name="preferredLanguage" className="categoryselect text-center"
                id="preferredLanguage" value={form && form["preferredLanguage"]} onChange={handleInput}> <option disabled selected value>--select Category--</option>
    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
    <option value="Tamil">Tamil</option>
  </select>
  </div>
  <div className="text-start ml-2 topicnames">Details</div>
  <div className="labelnames">Query Title</div>
   <input name="title"
                id="title"
                value={form && form["title"]}
                onChange={handleInput} placeholder="Enter Your Query Title" className="categoryselect"></input>
<div className="labelnames2">Query Description</div>
<textarea name="description"
                id="description"
                value={form && form["description"]}
                onChange={handleInput} placeholder="Enter the Description" className="categoryselect" rows="5" cols="50"></textarea>

<div className="text-start ml-2 topicnames">Your available Time?</div>
<div className="Timedescription">( Ours : 9:00 AM - 7:00 PM )</div>
<div className="labelnames">From</div>
<input type="time"
       min="09:00" max="19:00" name="availableTimefrom"
       id="availableTimefrom"
       value={form && form["availableTimefrom"]}
       onChange={handleInput} className="categoryselect text-center"  required></input>

<div className="labelnames">Till</div>
<input type="time"
       min="09:00" max="19:00" name="availableTimetill"
       id="availableTimetill"
       value={form && form["availableTimetill"]}
       onChange={handleInput} className="categoryselect text-center"  required></input>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Upload File</h5>
        <button type="button" class="close closebuttonquery" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>
      </div>
      <div class="modal-body">
      Kindly upload files less than 5MB and of type .jpg, .jpeg, & .png
  <input type="file" name="file" accept='image/*'  id="file"
       value={form && form["file"]}
       onChange={handleInput} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        {form.file && <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
            Setimage(true);
          }}>Upload</button> }
        
      </div>
    </div>
  </div>
</div>

<div className="text-start ml-2 topicnames2">Attach File (optional)</div>
{image ? <div className="d-flex"> <div className="fileupload"><img src={form.file}></img></div> <div className="changefile"><button type="button" className="changefilebutton" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
Change File
</button></div> </div> :
<div className="fileupload"><button type="button" className="uploadimagebutton" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
<BsPlusSquare className="fileuploadicon"/>
</button></div> }
<ToastContainer/>
  <div className="text-end m-3">{error&&<><AiOutlineExclamationCircle style={{marginRight:"2px", color:"red",fontSize:"22px"}}/></>}<button className="createproductbutton"   onClick={validatetextboxes} disabled={error} style={{border:"none",color:"white",backgroundColor:"blueviolet",padding:"5px",margin:"10px",borderRadius:"5px",fontSize:"22px",fontWeight:"500"}}><span>Create Query</span></button></div>
  </div>
</div>
      </div>
</Defaultpage>
<Footertab/>
</>
);
}

