import React from "react";
import './Message.css';
import Grid from "@mui/material/Grid";
import {BiUserCircle} from 'react-icons/bi';

export default function MessageHistory({ msg,currentuser }){
    // console.log(msg,currentuser);
  if (!msg || !currentuser) return null;

  function showdatetime(value){
    var date = value.split('T')[0];
    var time = value.split('T')[1].split('.')[0];
    var dateTime = date + ' ' + time;
    return dateTime;
  }

  return(<div style={{ backgroundColor:"rgb(225, 225, 225)",padding:"5px"}}>
  {msg.map((row,i)=>
    <div key={i} className="message-history" style={{padding:"5px",margin:"5px"}} >  
     {row.message || row.file ? <>  
        {row.sender==currentuser? <><div>
       <div className="Messageatrightside" style={{padding:"6px"}} >
       <div className="messagetabclientandoperator">{row.message&& row.message}</div>
       <div>{row.file&& <img src={row.file} style={{width:"150px",height:"150px"}}></img> }</div>
       {/* <div>{(row.file&&row.message) <img src={row.file} style={{width:"150px",height:"150px"}}></img> }</div> */}
<div style={{fontSize:"15px"}}>
  <span>{row.msgAt&& showdatetime(row.msgAt)}</span>
</div>
      </div>
      </div>   
      </>
      :
       <> 
      <div>
         <div style={{padding:"6px"}} className="Messageatleftside">
            <div className="messagetabclientandoperator">{row.message&& <span>{row.message}</span>}</div>
            <div>{row.file&& <img src={row.file} style={{width:"150px",height:"150px"}}></img> }
            </div>
                  <div style={{fontSize:"15px"}}>
  <span>{row.msgAt&& showdatetime(row.msgAt)}</span>
</div></div>
                  </div>
      </> }  
      </> : null}     
    </div>
   )}
    </div>
)};

