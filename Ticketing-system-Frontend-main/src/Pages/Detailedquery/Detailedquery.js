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
import {BsExclamationOctagon} from 'react-icons/bs';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {fetchSingleTicket,replyOnTicket,closeTicket} from "../../Redux/Tickets/ticketsAction";
import {useSelector, useDispatch } from "react-redux";
import { Space, Spin} from 'antd';
// ..
AOS.init();

export default function Detailedquery(){
  // let user='student';
  var { queryid } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [form, setForm] = useState({});
  const [solution, setSolution] = useState({});
  const [image, Setimage] = useState(false);
  const [readfile, setReadfile] = useState('');
  const [ratings, setratings] = useState(0);
  const dispatch=useDispatch();
  const {selectedTicket,isLoading,error,replyMsg,ticketreply,replyTicketError,ticketstatus,ticketstatusmsg}=useSelector((state) => state.tickets);
  const { user } = useSelector((state) => state.user);
  useEffect(()=>{
      dispatch(fetchSingleTicket(queryid));
  }, []);

//   function handleChangeimagefile(e) {
//     console.log(e.target.files);
//     setReadfile(URL.createObjectURL(e.target.files[0]));
// }
  function handleInput(e) {
    if (e) {
      const formCopy = {
        ...form,
        [e.target.id]: e.target.value,
      };
      // console.log(e.target.files);
      // setReadfile(URL.createObjectURL(e.target.files[0]));
      setForm(formCopy);
    }
  }

  function handlesolution(e){
    if (e) {
      const solutionCopy = {
        ...solution,
        [e.target.id]: e.target.value,
      };
      setSolution(solutionCopy);
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
            dispatch(replyOnTicket(selectedTicket._id,form))
           }
               setForm({});
               form.sender=null;
               form.file=null;
               form.msgAt=null;
               Setimage(false)
               setReadfile('');
      }

function validateconfirmation(){
  if(solution.solution.length<15){
    toast.error('Your Solution must be atleast 15 characters maximum', {
      position: toast.POSITION.TOP_CENTER
  });
  }
  else if(!ratings){
    toast.warning('Give Feedback Ratings', {
      position: toast.POSITION.TOP_CENTER
  });
  }
  if(solution.solution.length>15 && ratings){
  solution.rating=ratings.toString();
  // console.log(solution);  
  dispatch(closeTicket(selectedTicket._id,solution));
    document.getElementById('solution').value=null;
    setratings(0);
  }
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
  </Space></p>:  <Grid
          container
          // spacing={1}OSED
          item={true}
          sx={{justify: "Center",mt:0.5 }}
        className='text-center'>             
            <Grid item={true} xs={12} sm={12} md={6} lg={6} className="Recentquerygrid">
             <div className="querychattab">
           <div className="querychattabinside">

            <div className="text-end querytobuttonview">           
 {/* Button when query is closed*/}
            {selectedTicket.status=='CLOSED' && <button className='querycheckingbuttoninside' disabled>closed</button>} 
{/* Button when query is un Assigned*/}  
{selectedTicket.status=='UNASSIGNED' &&  <><button className='queryprocessingbuttoninside' disabled>un Assigned</button>
           <button className='queryappealsolvedbuttoninside'>{ticketstatus?<><div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div></>:<span>Appeal Solved</span>}</button></> }          
{/* Button when query is Assigned*/}            
{selectedTicket.status=='ASSIGNED' &&  <>
<button className='queryprocessingbuttoninside' disabled>Assigned</button>
           <button className='queryappealsolvedbuttoninside' data-bs-toggle="modal" data-bs-target="#appealedModalCenter">Appeal Solved</button></> }       
           </div>

{/* Top tab when closed*/}
    {selectedTicket.status=='CLOSED' && <div className="querychatboxstudentmentor1">
    {selectedTicket.conversations.length>0?<MessageHistory msg={selectedTicket.conversations} currentuser={user._id}/>:<div className="verticallycenteredmsg2" style={{color:"red",fontSize:"25px"}}>Query was Closed with out messages.
 </div> }</div>}

{/* Top tab when unAssigned*/}
 {selectedTicket.status=='UNASSIGNED' &&  <div className="querychatboxstudentmentor2"><div className="verticallycenteredmsg">This query isn't taken up by the mentor yet.
 <div>
  <img src='https://cdni.iconscout.com/illustration/premium/thumb/query-solution-5589752-4649415.png?f=webp' className="imageinappealsolved" data-aos="zoom-in" data-aos-duration='1000' ></img></div>
 </div>
 </div> }

{/* Top tab when Assigned*/}  

{selectedTicket.status=='ASSIGNED' && <div className="querychatboxstudentmentorassigned">
 {ticketreply ? <div className="verticallycenteredmsg"><div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div> : <>
 {selectedTicket.conversations? <>
    <div> {replyTicketError && <div className="text-start" style={{display:"inline-block",width:"50%",}} data-aos="fade-down"><div class="alert alert-danger text-center" role="alert">
 {replyTicketError}
</div></div>} {replyMsg && <div className="text-start" style={{display:"inline-block",width:"50%"}} data-aos="fade-down"><div class="alert alert-success text-center" role="alert">
 {replyMsg}
</div></div>}</div>
 <MessageHistory msg={selectedTicket.conversations} currentuser={user._id}/></>:<div className="verticallycenteredmsg" style={{color:"blue",fontSize:"25px"}}>No Message history
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
          {selectedTicket.status=='CLOSED' && <div className="querysolutiontabbottom1">
          <div className="text-start soltionname">Solution:</div>
          <div className="text-start soluutionanswer">{selectedTicket.solution?selectedTicket.solution:<>No Solution Given</>}</div>
          <div class=" d-flex justify-content-between" style={{marginLeft:"5px",fontSize:"18px",color:"blue"}}>feed back
  <div className="d-flex justify-content-between"></div>
  <div className="text-end ratingsdivtab">
       {[...Array(+selectedTicket.rating)].map(() => {        
        return (     
          <AiFillStar/>          
        );
      })}
    </div>
</div>        
</div>}

{/* Bottom tab UnAssigned */}
{selectedTicket.status=='UNASSIGNED' && <><div className="querysolutiontabbottom2 d-flex">
  <div className="linkattachmentbuttondiv text-start"><button className='linkatachmentbutton' disabled={selectedTicket.status=='CLOSED'|| selectedTicket.status=='UNASSIGNED'}><IoDocumentAttachOutline className="linkbuttonforsendingquery"/></button></div>
  <div className="inputformessagediv d-flex">
    <input placeholder="&nbsp;&nbsp;&nbsp; send a message . . ." id='message' className="inputbarforsendmessage" value={form && form["message"]} onChange={handleInput} disabled={selectedTicket.status=='CLOSED'|| selectedTicket.status=='UNASSIGNED'}  ></input> <button className="messagesendingbutton" disabled={selectedTicket.status=='CLOSED'|| selectedTicket.status=='UNASSIGNED'} onClick={validatetextboxes} ><BsSend className="messagesendingbuttonicon"/></button></div>
</div>
  </> }

{/* Bottom tab when query Assigned */}
{selectedTicket.status=='ASSIGNED' && <><div className="querysolutiontabbottom2 d-flex">
  <div className="linkattachmentbuttondiv text-start"><button className='linkatachmentbutton' disabled={selectedTicket.status=='CLOSED'|| selectedTicket.status=='UNASSIGNED'} data-bs-toggle="modal" data-bs-target="#exampleModalCenter" ><IoDocumentAttachOutline className="linkbuttonforsendingquery"/></button></div>
  <div className="inputformessagediv d-flex">
    <input placeholder="&nbsp;&nbsp;&nbsp; send a message . . ." id='message' className="inputbarforsendmessage" value={form && form["message"]} onChange={handleInput} disabled={selectedTicket.status=='CLOSED'|| selectedTicket.status=='UNASSIGNED'}  ></input> <button className="messagesendingbutton" disabled={selectedTicket.status=='CLOSED'|| selectedTicket.status=='UNASSIGNED'} onClick={validatetextboxes} ><BsSend className="messagesendingbuttonicon"/></button></div>
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
            <Grid item={true} xs={12} sm={12} md={6} lg={6} className="Recentquerygrid">
            <div className="recentqueryviewtab">
            <div className="recentqueryviewtabinside">
          <div className="qeurytitlecard text-start m-3">Title: {selectedTicket.title}</div>
          <div className="hrlinebreakrecentquery"><hr></hr></div>
          <div className="selectedTicketinrecenttab">
          <Grid
          container
          // spacing={1}
          item={true}
          justifyContent="flex-start"
  alignItems="flex-start">             
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideleft"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Created at:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{selectedTicket.createdAt && selectedTicket.createdAt.split('T')[0]}</div>
            </div></Grid>
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideright"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Assigned To:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{selectedTicket.status=='UNASSIGNED'? <span>Mentor is not assigned yet...</span>:<span>{selectedTicket.assignedmentorname}</span>}</div></div></Grid>
            </Grid>
            <div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"5px", marginLeft:"5px"}}>Description:</div>
            <div className="text-start" style={{ fontSize: "18px", marginTop:"3px", marginLeft:"5px"}}>{selectedTicket.description}</div>
            <div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"5px", marginLeft:"5px"}}>Tags:</div>
            <div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"3px", marginLeft:"5px"}}>
            {selectedTicket.tags?<>{selectedTicket.tags.split(",").map((splitval)=>{
              return <button style={{color: "rgb(46,209,108)",backgroundColor:"rgb(214,255,228)", fontSize: "18px", marginTop:"3px", marginLeft:"5px", border:"2px solid green", borderRadius:"15px", padding:"3px", marginRight:"2px"}} disabled >{splitval}</button>
            })}</>:""}
            </div>
            <Grid
          container
          item={true}
          justifyContent="flex-start"
  alignItems="flex-start">             
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideleft"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Category:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{selectedTicket.category}</div>
            </div></Grid>
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideright"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>SubCategory:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{selectedTicket.subCategory}</div></div></Grid>
             </Grid>

<div className="text-start" style={{color:"black", fontSize: "20px",marginLeft:"3px"}}>Available Time </div>
             <Grid
          container
          item={true}
          justifyContent="flex-start"
  alignItems="flex-start">             
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideleft"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>From:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{selectedTicket.availableTimefrom}</div>
            </div></Grid>
            <Grid item={true} xs={6} sm={6} md={6} lg={6} className="text-start"><div className="recentquerytabinsideright"><div style={{color: "rgb(126,142,159)", fontSize: "20px"}}>Till:</div>
            <div style={{fontSize: "18px",marginTop:"3px"}}>{selectedTicket.availableTimetill}</div></div></Grid>
             </Grid>


             {selectedTicket.file ?<><div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"5px", marginLeft:"5px"}}>Attachments:</div><div className="text-start" style={{color: "rgb(126,142,159)",  marginTop:"5px", marginLeft:"5px"}}>
              <img src={selectedTicket.file}  style={{width: "150px",height:"150px",  marginTop:"5px", marginLeft:"5px"}}></img>
              </div></>  :" "}            
            <div className="text-start" style={{color: "rgb(126,142,159)", fontSize: "20px", marginTop:"5px", marginLeft:"5px"}}>Preferred Language:</div>
            <div className="text-start" style={{ fontSize: "18px", marginTop:"3px", marginLeft:"5px"}}>{selectedTicket.preferredLanguage}</div>
          </div>
              </div>  
              </div>  
            </Grid>
            </Grid> }

{/* Modal */}
<div class="modal fade" id="appealedModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle" style={{color:"blueviolet"}}>Appeal this query as solved?</h5>
        <button type="button" class="close closebuttonquery" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>
      </div>
      <div class="modal-body">
        <div style={{textAlign:"start",fontSize:"20px", color:"blue"}}>  Enter your solution to appeal this as solved</div>
      <div style={{textAlign:"start",fontSize:"18px", color:"grey"}}>Solution : </div>
      <textarea name="solution"
                id="solution"
                value={solution && solution["solution"]}
                 placeholder="Enter the Solution" className="modaltextarea"  rows="5" cols="40" onChange={handlesolution} ></textarea>
               <div><BsExclamationOctagon style={{fontSize:"25px", color:"red", marginRight:"2px"}}/> The Characters should be minimum of 15 and maximum of 900.</div> 
               <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Feedback Ratings</Typography>
      <Rating
        name="simple-controlled"
        value={ratings}
        onChange={(event, newValue) => {
          setratings(newValue);
        }}
      /></Box>
      {error && <div><div class="alert alert-danger" role="alert">
  {error}
</div></div>}
{ticketstatusmsg && <div class="alert alert-success" role="alert">
  {ticketstatusmsg}
</div> }
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary"  disabled={!solution.solution}
        onClick={validateconfirmation}
        >{ticketstatus?<><div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></>:<span>Confirm</span>}</button>
      </div>
    </div>
  </div>
  <ToastContainer />
</div>

   </Defaultpage>
   </>
  );

}