import React, {useState, useEffect} from "react";
import './Detailedquery.css';
import Defaultpage from "../../Components/Defaultpage";
import Grid from "@mui/material/Grid";
import {useNavigate,Link,useParams, } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai';
import {IoDocumentAttachOutline} from 'react-icons/io5';
import {BsSend} from 'react-icons/bs';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import MessageHistory from './Messages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {fetchmentorSingleTicket,replyOnTicket} from "../../Redux/Tickets/ticketsAction";
import {useSelector, useDispatch } from "react-redux";
import { Space, Spin } from 'antd';
// ..
AOS.init();

export default function Detailedformentorquery(){
    const { user } = useSelector((state) => state.user);
  var { queryid } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [form, setForm] = useState({});
  const [solution, setSolution] = useState({});
  const [image, Setimage] = useState(false);
  const [readfile, setReadfile] = useState('');
  const [conversations,setConversations]=useState([]);
  const [ratings, setratings] = useState(0);
  const dispatch=useDispatch();
  const {mentorTicket,isLoading,error,replyMsg,ticketreply,replyTicketError}=useSelector((state) => state.tickets);

  useEffect(()=>{
      dispatch(fetchmentorSingleTicket(queryid));
  }, []);

//   function handleChangeimagefile(e) {
//     console.log(e.target.files);
//     setReadfile(URL.createObjectURL(e.target.files[0]));
// }
// let checking=mentorTicket.status;
  function handleInput(e) {
    if (e) {
      const formCopy = {
        ...form,
        [e.target.id]: e.target.value,
      };
      // console.log(e.target.files);
      // if(f)
      // setReadfile(URL.createObjectURL(e.target.files[0]));
      setForm(formCopy);
    }
  }

  function validatetextboxes(){
    document.getElementById('message').value=null;
        form.sender=user._id;
        form.msgAt=new Date().toJSON();
        if(readfile){
          form.file=readfile;
        }
           if(form.message || form.file){
            console.log(form);
            dispatch(replyOnTicket(mentorTicket._id,form))
           }
               setForm({});
               form.sender=null;
               form.file=null;
               form.msgAt=null;
               Setimage(false)
               setReadfile('');
      }

  return(<>
   <Defaultpage>
   <div className="divbackbutton text-start">
        <button onClick={goBack} className="buttonavigateback">
          &lt;&nbsp;&nbsp;<span className="Backbuttoncreatequery">Back&nbsp;&nbsp;</span>
        </button>
      </div>
      {isLoading ? <p style={{display:"flex",alignItems:"center",justifyContent:"center",height:"75vh"}}> <Space size="middle">
    <Spin size="large" />
  </Space></p>: <div> 
  <Grid
          container
          // spacing={1}OSED
          item={true}
          sx={{justify: "Center",mt:0.5 }}
        className='text-center'>             
            <Grid item={true} xs={12} sm={12} md={8} lg={8} className="Recentquerygrid">
             <div className="querychattab">
           <div className="querychattabinside">

           <div className="text-end querytobuttonview">           
 {/* Button when query is closed*/}
            {mentorTicket.status=='CLOSED' && <button className='querycheckingbuttoninside' disabled>closed</button>}         
{/* Button when query is Assigned*/}            
{mentorTicket.status=='ASSIGNED' &&  <>
<button className='queryprocessingbuttoninside' disabled>Assigned</button></> }       
           </div>

{/* Top tab when closed*/}
    {mentorTicket.status=='CLOSED' && <div className="querychatboxstudentmentor1">
    {mentorTicket.conversations.length>0?<MessageHistory msg={mentorTicket.conversations} currentuser={user._id}/>:<div className="verticallycenteredmsg2" style={{color:"red",fontSize:"25px"}}>Query was Closed with out messages.
 </div> }</div>}


{/* Top tab when Assigned*/}  

 {mentorTicket.status=='ASSIGNED' && <div className="querychatboxstudentmentorassigned">
 {ticketreply ? <div className="verticallycenteredmsg"><div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div> : <>
 {mentorTicket.conversations? <>
    <div> {replyTicketError && <div className="text-start" style={{display:"inline-block",width:"50%",}} data-aos="fade-down"><div class="alert alert-danger text-center" role="alert">
 {replyTicketError}
</div></div>} {replyMsg && <div className="text-start" style={{display:"inline-block",width:"50%"}} data-aos="fade-down"><div class="alert alert-success text-center" role="alert">
 {replyMsg}
</div></div>}</div>
 <MessageHistory msg={mentorTicket.conversations} currentuser={user._id}/></>:<div className="verticallycenteredmsg" style={{color:"blue",fontSize:"25px"}}>No Message history
 </div>}

 {readfile && image ? <div className="d-flex messagetabtosendmessage"> <div className="fileuploadimagediv text-end"><img src={readfile} className="fileimageinmessage"></img> <div className="changefile">
  <button className="closebuttonquery2" onClick={() => {
            Setimage(false);
            setReadfile('');
            form.file=null;
   }}>X</button></div> </div></div>  : " " }
</>}
 </div>}

{/* Bottom tab closed */}
          {mentorTicket.status=='CLOSED' && <div className="querysolutiontabbottom1">
          <div className="text-start soltionname">Solution:</div>
          <div className="text-start soluutionanswer">{mentorTicket.solution?mentorTicket.solution:<>No Solution Given</>}</div>
          <div class=" d-flex justify-content-between" style={{marginLeft:"5px",fontSize:"18px",color:"blue"}}>feed back Rating
  <div className="d-flex justify-content-between"></div>
  <div className="text-end ratingsdivtab">
       {[...Array(+mentorTicket.rating)].map(() => {        
        return (     
          <AiFillStar/>          
        );
      })}
    </div>
</div>        
</div>}

{/* Bottom tab when query Assigned */}
{mentorTicket.status=='ASSIGNED' && <><div className="querysolutiontabbottom2 d-flex">
  <div className="linkattachmentbuttondiv text-start"><button className='linkatachmentbutton' disabled={mentorTicket.status=='CLOSED'|| mentorTicket.status=='UNASSIGNED'} data-bs-toggle="modal" data-bs-target="#exampleModalCenter" ><IoDocumentAttachOutline className="linkbuttonforsendingquery"/></button></div>
  <div className="inputformessagediv d-flex">
    <input placeholder="&nbsp;&nbsp;&nbsp; send a message . . ." id='message' className="inputbarforsendmessage" value={form && form["message"]} onChange={handleInput} disabled={mentorTicket.status=='CLOSED'|| mentorTicket.status=='UNASSIGNED'}  ></input> <button className="messagesendingbutton" disabled={mentorTicket.status=='CLOSED'|| mentorTicket.status=='UNASSIGNED'} onClick={validatetextboxes} ><BsSend className="messagesendingbuttonicon"/></button></div>
</div>
  </> }

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
       onChange={(e)=>
        setReadfile(URL.createObjectURL(e.target.files[0]))} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
            Setimage(true);
          }} >Upload</button>       
      </div>
    </div>
  </div>
</div>
           </div>
              </div>   
            </Grid>

            <Grid item={true} xs={12} sm={12} md={4} lg={4} className="Recentquerygrid">
            <div className="recentqueryviewtab">
            <div className="recentqueryviewtabinside">
          <div className="qeurytitlecard text-start m-3">Title: {mentorTicket.title}</div>
          <div className="hrlinebreakrecentquery"><hr></hr></div>
          <div className="selectedTicketinrecenttab">
          <Grid
          container
          // spacing={1}
          item={true}
          justifyContent="flex-start"
  alignItems="flex-start">             
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideleft"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Created at:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{mentorTicket.createdAt && mentorTicket.createdAt.split('T')[0]}</div>
            </div></Grid>
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideright"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Assigned To:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{mentorTicket.status=='UNASSIGNED'? <span>Mentor is not assigned yet...</span>:<span>{mentorTicket.assignedmentorname}</span>}</div></div></Grid>
            </Grid>
            <div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"5px", marginLeft:"5px"}}>Description:</div>
            <div className="text-start" style={{ fontSize: "18px", marginTop:"3px", marginLeft:"5px"}}>{mentorTicket.description}</div>
            <div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"5px", marginLeft:"5px"}}>Tags:</div>
            <div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"3px", marginLeft:"5px"}}>
            {mentorTicket.tags?<>{mentorTicket.tags.split(",").map((splitval)=>{
              return <button style={{color: "rgb(46,209,108)",backgroundColor:"rgb(214,255,228)", fontSize: "18px", marginTop:"3px", marginLeft:"5px", border:"2px solid green", borderRadius:"15px", padding:"3px", marginRight:"2px"}} disabled >{splitval}</button>
            })}</>:""}
            </div>

            <Grid
          container
          item={true}
          justifyContent="flex-start"
  alignItems="flex-start">             
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideleft"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Category:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{mentorTicket.category}</div>
            </div></Grid>
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideright"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>SubCategory:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{mentorTicket.subCategory}</div></div></Grid>
             </Grid>
             {mentorTicket.file ?<><div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"5px", marginLeft:"5px"}}>Attachments:</div><div className="text-start" style={{color: "rgb(126,142,159)",  marginTop:"5px", marginLeft:"5px"}}>
              <img src={mentorTicket.file}  style={{width: "150px",height:"150px",  marginTop:"5px", marginLeft:"5px"}}></img>
              </div></>  :" "}  

<div className="text-start" style={{fontSize: "20px",marginLeft:"3px",color: "rgb(126,142,159)"}}>Available Time </div>       <Grid
          container
          item={true}
          justifyContent="flex-start"
  alignItems="flex-start">             
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideleft"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>From:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{mentorTicket.availableTimefrom}</div>
            </div></Grid>
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideright"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Till:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{mentorTicket.availableTimetill}</div></div></Grid>
             </Grid>

             <div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px",marginLeft:"3px"}}>Student Contacts </div>       <Grid
          container
          item={true}
          justifyContent="flex-start"
  alignItems="flex-start">             
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideleft"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Email:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{mentorTicket.email}</div>
            </div></Grid>
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideright"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Mobile:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{mentorTicket.studentmobileno}</div></div></Grid>
             </Grid>
           

            <div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"5px", marginLeft:"5px"}}>Preferred Language:</div>
            <div className="text-start" style={{ fontSize: "18px", marginTop:"3px", marginLeft:"5px"}}>{mentorTicket.preferredLanguage}</div>
          </div>
              </div>  
              </div>  
            </Grid>

            </Grid> 
            </div>}
<ToastContainer />
   </Defaultpage>
   </>
  );

}