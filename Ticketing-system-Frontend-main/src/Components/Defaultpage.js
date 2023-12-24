import React, {useState,useEffect} from "react";
import "./Defaultpage.css";
import logo from '../images/designlogo.png';
import Avatar from "@mui/material/Avatar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {HiOutlineLogout} from 'react-icons/hi';
import {HiBarsArrowDown} from 'react-icons/hi2';
import {CgProfile} from 'react-icons/cg';
import {IoIosNotifications} from 'react-icons/io';
import {userLogout} from "../api/userApi";
import { message } from 'antd';
import {fetchusersAllTickets} from "../Redux/Tickets/ticketsAction";
export default function Defaultpage(props) {

  const [isOpen, setIsOpen] = React.useState(true);
  const { user } = useSelector((state) => state.user);
  const { searchTicketList, isLoading, error  } = useSelector((state) => state.tickets);
  const [latestquery, setLatestquery] = useState({});
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const logMeOut = () => {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("QueryTicketingSystem");
      userLogout();
      message.success("Logged Out");
      navigate("/");
    };


    useEffect(() => {
      if (searchTicketList.length == 0) {
        dispatch(fetchusersAllTickets());
      } else {
        setLatestquery(searchTicketList[searchTicketList.length - 1]);
      }
    }, [searchTicketList]);
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light headersection">

  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <HiBarsArrowDown/>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img src={logo} className="defaultlogoimage"></img>
        Queries System       
      </a>
     
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to='/dashboard' className="linktopages">
          <a class="nav-link" href="#">Home</a></Link>
        </li>
        <li class="nav-item">
        {user.role == "mentor"?<><Link to='/mysolutions' className="linktopages">
          <a class="nav-link" href="#">My solutions</a></Link></>:<><Link to='/myqueries' className="linktopages">
          <a class="nav-link" href="#">My Queries</a></Link></>}
        </li>
        <li class="nav-item">
          <Link to='/adminpage' className="linktopages">
          <a class="nav-link" href="#">Admin</a></Link>
        </li>
      </ul>

    </div>
    <div class="d-flex align-items-center">
      <a class="text-reset me-3" href="#">
      </a>
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ><IoIosNotifications className="icondefault"/>
        {isOpen && <span class="badge rounded-pill badge-notification bg-danger">1</span> }
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li><Link to='/myqueries' style={{textDecoration:"none"}} onClick={()=>{setIsOpen(false);}}>
            <a class="dropdown-item" href="#">{user.role=="student"?<span>{latestquery.status=="ASSIGNED"?<span>Your Query assigned to {latestquery.assignedmentorname}</span>:<span>Your Last Query is not taken by Mentor</span>}</span>:<span>You have latest message</span>}</a></Link>
          </li>
        </ul>
      </div>
      
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{textDecoration:"none"}}
        ><span style={{color:"black",fontSize:"20px",marginRight:"5px"}}>{user.firstname}</span>
          <Avatar className="icondefault"></Avatar>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
          style={{backgroundColor:"rgb(189,189,189)"}}
        >
          <li>
            <Link to='/userprofile' style={{textDecoration:"none"}}>
            <a class="dropdown-item" href="#"><CgProfile style={{fontSize:"25px",marginRight:"5px"}}/> <span style={{fontSize:"20px",color:"black"}}>My profile</span></a></Link>
          </li>
          <li>
            <a class="dropdown-item" href="#"  onClick={logMeOut}><HiOutlineLogout style={{fontSize:"25px",marginRight:"8px"}}/><span style={{fontSize:"20px",color:"black"}}>Logout</span></a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
  
</nav>


<div className="Content">{props.children}</div>
</>
  );
}

