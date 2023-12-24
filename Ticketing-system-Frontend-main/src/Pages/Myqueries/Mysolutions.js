import React, { useState, useEffect } from "react";
import Defaultpage from "../../Components/Defaultpage";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Myqueryhistory.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useSelector, useDispatch } from "react-redux";
import {
  fetchmentorsAllTickets,
} from "../../Redux/Tickets/ticketsAction";
import { Space, Spin } from 'antd';
// ..
AOS.init();

export default function Mysolutionhistory() {
  const dispatch = useDispatch();
  const { mentorTicketList, isLoading, error } = useSelector((state) => state.tickets);
  const [str, setStr] = useState("");
  const [displaymyhistorycards, setdisplaymyhistorycards] = useState({});
  const [filteredstatus, setfilteredstatus] = useState("");
  const [querynoorder,setquerynoorder]=useState(0);
  const [filteredmyhistorycards, setfilteredmyhistorycards] = useState({});

  useEffect(() => {
    if (mentorTicketList.length == 0) {
      dispatch(fetchmentorsAllTickets());
    } else {
      setdisplaymyhistorycards(mentorTicketList);
      setfilteredmyhistorycards(mentorTicketList);
      setquerynoorder(mentorTicketList.length);
    }
  }, [mentorTicketList]);

  function handleInput(e) {
    const { value } = e.target;
    setStr(value);
    if (value == "") {
      setfilteredmyhistorycards(displaymyhistorycards);
    }
  }

  function handleInputstatus(e) {
    const { value } = e.target;
    // console.log(value)
    setfilteredstatus(value);
    //  console.log(filteredstatus);
    //  serchcontent(filteredvalue);
  }

  function searchtickets() {
    serchcontent(str);
  }
  function serchcontent(sttr) {
    const displaytickets = displaymyhistorycards.filter((row) =>
      row.title.toLowerCase().includes(sttr.toLowerCase())
    );
    setfilteredmyhistorycards(displaytickets);
  }
  function searchstatus() {
    searchstatuscontent(filteredstatus);
  }

  function searchstatuscontent(sttr) {
    const displaytickets = displaymyhistorycards.filter((row) => {
      if (sttr == "CLOSED") {
        return row.status == "CLOSED";
      }
      if (sttr == "ASSIGNED") {
        return row.status == "ASSIGNED";
      } else {
        return displaymyhistorycards;
      }
    });
    setfilteredmyhistorycards(displaytickets);
  }

  const getsumofratings = () => {
    let sum = 0;
    for (let i = 0; i < displaymyhistorycards.length; i++) {
      sum +=Number(displaymyhistorycards[i].rating);
    }
    let total =`${sum} / ${displaymyhistorycards.length*5}`;
    return total ;
  }

  return (
    <>
      {" "}
      <Defaultpage>
        <div className="topcontent d-flex justify-content-between">
          <div className="div1dashboard text-start" >
              {" "}
              <button className="querybuttondashboard" disabled style={{border:"none", backgroundColor:"rgb(201, 200, 202)", fontSize:'25px'}}>My Solutions </button>
              <div className="querybuttondashboard1" style={{fontSize:"15px"}}><div class="dropdown">
  <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{border:"none", backgroundColor:"rgb(201, 200, 202)", fontSize:'15px',color:"blue"}}>
   My feedback Ratings
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Overall rating : {getsumofratings()}</a></li>
  </ul>
</div></div>
          </div>
          <div class="input-group rounded  searchbardashboard">
            <input
              id="searchbar"
              type="search"
              class="form-control rounded searchbarinput"
              placeholder="Search Your query here..."
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={handleInput}
            />
            <span class="input-group-text border-0" id="search-addon">
              <button
                type="button"
                class=" searchbuttondashboard"
                onClick={searchtickets}
                disabled={!displaymyhistorycards}
              >
                <BiSearchAlt2 className="searchbuttonsize" />
              </button>
            </span>
          </div>
        </div>
{/* {isLoading ?<><p style={{display:"flex",alignItems:"center",justifyContent:"center",height:"75vh"}}> <Space size="middle">
    <Spin size="large" />
  </Space></p>
  </> : <> */}
        <div className="sectioncontent" style={{marginLeft:"5%",marginRight:"5%"}}>
          <Grid
            container
            spacing={1.5}
            item={true}
            sx={{ justify: "Center", mt: 0.5 }}
            className="text-center"
          >
            <Grid
              item={true}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className=""
              sx={{ borderRadius: "5px" }}
            >
<div style={{display:"flex",justifyContent:"center"}}>
<select
                name="category"
                className="categoryselect text-center"
                onChange={handleInputstatus}
                style={{width:"30%"}}
              >
                <option value="all">All</option>
                <option value="ASSIGNED">Assigned</option>
                <option value="CLOSED">closed</option>
              </select>
              <button
                  onClick={searchstatus}
                  style={{
                    background: "blueviolet",
                    border: "2px solid violet",
                    color: "white",
                    fontSize: "18px",
                    borderRadius: "10px",
                    fontWeight: "500",
                    marginLeft:"5px"
                  }}
                >
                  Status
                </button></div>
              <div className="historygridtab" style={{overflowX:"scroll",height:"73vh"}}>
             
                             {filteredmyhistorycards.length > 0 ?(
              <>
 <table class="table" style={{ border: "1px solid black" }}>
              <thead className="bg-dark" >
                      <tr>
                        <th scope="col">Query No</th>
                        <th scope="col">Category</th>
                        <th scope="col">SubCategory</th>
                        <th scope="col">Title</th>
                        <th scope="col">Available Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Rating</th>
                        <th scope="col">&nbsp;&nbsp;&nbsp;</th>
                      </tr>
                    </thead>
  <tbody>
  {filteredmyhistorycards
                    .slice(0)
                    .reverse()
                    .map((val,ind) => {
                      return (
 <tr class={val.status=="ASSIGNED"?  "table-warning"  : "table-info"} >
                        <th scope="row">{ind+1}</th>
                        <td>{val.category}</td>
                        <td>{val.subCategory}</td>
                        <td>{val.title}</td>
                        <td>{val.availableTimefrom} - {val.availableTimetill}</td>
                        <td>{val.status}</td>
                        <td>{val.rating=='0'?<>-</>:<>
                        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}><Rating name="read-only" value={val.rating} readOnly /></Box></>}</td>
                        <td><Link
                    style={{ textDecoration: "none" }}
                    to={`/querychatdetails/${val._id}`}
                  ><button className="gotoquerybutton" style={{fontSize:"15px",padding:"2px",border:"2px solid white"}}>View query</button></Link></td>
                      </tr>
                      );                   
                    })}
  </tbody>
</table>
               </>) : (
                  <div
                    className="historygridtab"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgb(248,249,251)",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "2rem",
                          color: "red",
                          fontWeight: "500",
                        }}
                      >
                        NO Solutions Found !
                      </div>
                      <img
                        src="https://cdn.dribbble.com/users/1785628/screenshots/5605512/media/097297f8e21d501ba45d7ce437ed77bd.gif"
                        style={{ width: "50%", height: "50%" }}
                      ></img>
                    </div>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
        
         {/* </> } */}
      </Defaultpage>
    </>
  );
}
