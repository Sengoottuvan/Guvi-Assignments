import React, { useState, useEffect } from "react";
import Defaultpage from "../../Components/Defaultpage";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Myqueryhistory.css";
import data from "./dummy.json";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchusersAllTickets,
} from "../../Redux/Tickets/ticketsAction";
import { Space, Spin } from 'antd';
// ..
AOS.init();

export default function Myqueryhistory() {
  const dispatch = useDispatch();
  const { searchTicketList, isLoading, error } = useSelector((state) => state.tickets);
  const [str, setStr] = useState("");
  const [displaymyhistorycards, setdisplaymyhistorycards] = useState({});
  const [latestquery, setLatestquery] = useState({});
  const [lastqueryno,setLatestqueryno]=useState(0);
  const [querynoorder,setquerynoorder]=useState(0);
  const [filteredmyhistorycards, setfilteredmyhistorycards] = useState({});

  useEffect(() => {
    if (searchTicketList.length == 0) {
      dispatch(fetchusersAllTickets());
    } else {
      setdisplaymyhistorycards(searchTicketList);
      setfilteredmyhistorycards(searchTicketList);
      setLatestquery(searchTicketList[searchTicketList.length - 1]);
      setLatestqueryno(searchTicketList.length);
      setquerynoorder(searchTicketList.length);
    }
  }, [searchTicketList, str, displaymyhistorycards]);
  function handleInput(e) {
    const { value } = e.target;
    setStr(value);
    if (value == "") {
      setfilteredmyhistorycards(displaymyhistorycards);
    }
  }
  // console.log(displaymyhistorycards);
  function searchtickets() {
    serchcontent(str);
  }
  function serchcontent(sttr) {
    const displaytickets = displaymyhistorycards.filter((row) =>
      row.title.toLowerCase().includes(sttr.toLowerCase())
    );
    setfilteredmyhistorycards(displaytickets);
  }
  return (
    <>
      {" "}
      <Defaultpage>
        <div className="topcontent d-flex justify-content-between">
          <div className="div1dashboard text-start">
            <Link to="/query">
              {" "}
              <button className="querybuttondashboard">+ Create Query</button>
            </Link>           
          </div>
          {searchTicketList.length == 0 && <div style={{color:"red",fontSize:"18px",fontWeight:"500"}}>! Your query history is empty</div>}
          
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

{isLoading ?<><p style={{display:"flex",alignItems:"center",justifyContent:"center",height:"75vh"}}> <Space size="middle">
    <Spin size="large" />
  </Space></p></> : <>
        <div className="sectioncontent">
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
              md={4}
              lg={4}
              className="Recentquerygrid"
              sx={{ borderRadius: "5px" }}
            >
              <div className="Recentqueriestab">
              <div data-aos="flip-left"><h5 className="mb-4 pt-2">Recent query</h5></div>
                <div className="m-3 d-flex justify-content-between">
                  <h6>QN{lastqueryno}<span style={{marginLeft:"10px",marginRight:"10px"}}>-</span>{latestquery.title}</h6>
                  <p>
                    {displaymyhistorycards && latestquery.status == "CLOSED" ? (
                      <button className="querycheckingbutton">Closed</button>
                    ) : (
                      <button className="querycheckingprocess">{latestquery.status}</button>
                    )}
                  </p>
                </div>
                <hr className="linebreaking"></hr>

                <div className="recentquerydetail d-flex justify-content-between">
                  <div className="createdattimedate recenttabtopicnames p-2">
                    <h5>Created at:</h5>
                    <span>
                      {latestquery.createdAt &&
                        latestquery.createdAt.split("T")[0]}
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                      {latestquery.createdAt &&
                        latestquery.createdAt.split("T")[1].split(".")[0]}
                    </span>
                  </div>
                  <div className="createdattimedate p-2">
                    <h5>Assigned to:</h5>
                    <span>{latestquery.assignedmentorname}</span>
                  </div>
                </div>
                <div className="recenttabtopicnames text-start">
                  <h5>Description:</h5>
                </div>
                <p className="recenttabtopicnames text-start">
                  {latestquery.description}
                </p>

                <div className="recenttabtopicnames text-start">
                  <h5>Attachments:</h5>
                </div>
                {latestquery.file ? (
                  <div className="text-start">
                    <img
                      src={latestquery.file}
                      className="attentmentfile"
                    ></img>
                  </div>
                ) : (
                  <p className="recenttabtopicnames text-start">
                    <span className="text-primary">No Attachments</span>
                  </p>
                )}
                <div className="recenttablowerbutton">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/querydetails/${latestquery._id}`}
                  >
                    {" "}
                    <button className="gotoquerybutton">Go to Query</button>
                  </Link>
                </div>
              </div>
            </Grid>

            <Grid
              item={true}
              xs={12}
              sm={12}
              md={8}
              lg={8}
              className=""
              sx={{ borderRadius: "5px" }}
            >
              <div className="historygridtab">
                {/* Need to loop here */}

                {filteredmyhistorycards.length > 0 ? (
                  filteredmyhistorycards
                    .slice(0)
                    .reverse()
                    .map((val,ind) => {
                      return (
                        <Link
                          to={`/querydetails/${val._id}`}
                          className="cardslinktab"
                        >
                          {" "}
                          <div class="card cradslistsforhistory">
                            <div className="d-flex justify-content-between">
                              <div class="card-body text-start">
                                <h5 class="card-title">
                                  QN-{querynoorder-ind} - {val.title}
                                </h5>
                                <button
                                  type="button"
                                  class="cradslistinsidebutton1"
                                >
                                  {val.category}
                                </button>
                              </div>
                              <div class="card-body text-end">
                                <h5 class="card-title">
                                  {/* <button type="button" class="cradslistinsidebutton2">{val.check}</button> */}
                                  {displaymyhistorycards &&
                                  val.status == "UNASSIGNED" ? (
                                    <>
                                      <button
                                        type="button"
                                        style={{
                                          padding: "4px",
                                          border: "none",
                                          backgroundColor: "rgb(249, 159, 247)",
                                          color: "black",
                                          borderRadius: "10px",
                                          cursor: "context-menu",
                                        }}
                                      >
                                        {displaymyhistorycards && val.status}
                                      </button>
                                    </>
                                  ) : displaymyhistorycards &&
                                    val.status == "ASSIGNED" ? (
                                    <>
                                      <button
                                        type="button"
                                        style={{
                                          padding: "4px",
                                          border: "none",
                                          background: "rgb(0, 195, 255)",
                                          color: "blue",
                                          borderRadius: "10px",
                                          cursor: "context-menu",
                                        }}
                                      >
                                        {displaymyhistorycards && val.status}
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        type="button"
                                        class="cradslistinsidebutton2"
                                        style={{ cursor: "context-menu" }}
                                      >
                                        {displaymyhistorycards && val.status}
                                      </button>{" "}
                                    </>
                                  )}
                                </h5>
                                <p class="card-text">{val.time}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                ) : (
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
                        NO Queries Found !
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
        </> }
      </Defaultpage>
    </>
  );
}
