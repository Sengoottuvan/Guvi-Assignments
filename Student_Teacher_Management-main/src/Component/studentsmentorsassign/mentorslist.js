import "bootstrap/dist/css/bootstrap.min.css";
// import "../Table/Table.css";
import "./studentsmentor.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import {AiFillDelete,AiFillEdit} from 'react-icons/ai';
import {FaStreetView} from 'react-icons/fa';
import {TiTick} from 'react-icons/ti';
import {RxCross2} from 'react-icons/rx';
import {message, Popconfirm } from "antd";
import { Link } from "react-router-dom";


export default function MentorsPage() {
  const [userData, setUserData] = useState([]);
  const[paginationnumber,setpaginationnumber]=useState(10);
  const [solution, setSolution] = useState({});
  useEffect(() => {
    fetch("https://64a67bae096b3f0fcc7fddb1.mockapi.io/mentors")
      .then((data) => data.json())
      .then((response) => setUserData(response));
  }, []);

  const [currentpage, setCurrenpage] = useState(1);
  const recordsperpage =paginationnumber;
  const lastIndex = currentpage * recordsperpage;
  const firstIndex = lastIndex - recordsperpage;
  const records = userData.slice(firstIndex, lastIndex);
  const noofpages = Math.ceil(userData.length / recordsperpage);
  const numberspage = [...Array(noofpages + 1).keys()].slice(1);

  function prevpage() {
    if (currentpage !== 1) {
      setCurrenpage(currentpage - 1);
    }
  }

  function Nextpage() {
    if (currentpage !== noofpages) {
      setCurrenpage(currentpage + 1);
    }
  }

  function changecurrentpage(id) {
    setCurrenpage(id);
  }

  function handlepaginationnumber(e){
    const { value } = e.target;
    setpaginationnumber(value);
}

const handleDelete = (id) => {
  fetch("https://64a67bae096b3f0fcc7fddb1.mockapi.io/mentors/" + id, {
    method: "DELETE"
  })
    .then((data) => data.json())
    .then((res) => {
      message.success(`Mentor id ${res.mentorid} Deleted`);
    });
    setTimeout(()=>{
      window.location.reload();
    },1500);  
};

const getProducts = (id) => {
  fetch("https://64a67bae096b3f0fcc7fddb1.mockapi.io/mentors/" + id)
    .then((data) => data.json())
    .then((res) => setSolution(res));
  console.log(id);
};


  return (
    <div>
      <Navbar />
      <div className="row Tablecontent">
        <div class="text-center mt-3">
          <div class="cardfortable card shadow">
            <div class="py-2 text-center">
              <div class="text-center">
              <h4>Mentors Details</h4>
            </div>
              <div class="text-end">
              <h4><Link className="Sidebarlink"  to='/creatementorslist'><button
                   style={{
                     background: "blue",
                     border: "1px solid white",
                     color: "white",
                     fontSize: "18px",
                     borderRadius: "5px",
                     fontWeight: "100",
                     display:"flex"
                   }}
            >Add New Mentor</button></Link></h4>
            </div>
            </div>
            <div className="card-body">
              <table class="table" style={{ border: "2px solid rgb(0, 0, 0)",margin: "5px",
    backgroundColor:"rgb(204, 204, 204)"}}>
                <thead class="thead-dark" style={{ backgroundColor: " rgb(204, 204, 204)",
    margin:"7px"}}>
                  <th scope="col" style={{ backgroundColor: " rgb(204, 204, 204)"}}>Mentor ID</th>
                  <th scope="col" style={{ backgroundColor: " rgb(204, 204, 204)"}}>Name</th>
                  <th scope="col" style={{ backgroundColor: " rgb(204, 204, 204)"}}>Email</th>
                  <th scope="col" style={{ backgroundColor: " rgb(204, 204, 204)"}}>Specialization</th>
                  <th scope="col" style={{ backgroundColor: " rgb(204, 204, 204)"}}>View</th>
                  <th scope="col" style={{ backgroundColor: " rgb(204, 204, 204)"}}>Students Assign</th>
                  <th scope="col" style={{ backgroundColor: " rgb(204, 204, 204)"}}>Students Count</th>
                  <th scope="col" style={{ backgroundColor: " rgb(204, 204, 204)"}}>Delete</th>
                </thead>
                <tbody>
                  {records.map((value,ind) => {
                    return (
                      <tr key={value._id} style={{ backgroundColor: " rgb(204, 204, 204)",
                      margin:"7px"}}>
                        <td scope="row" style={{ border: "1px solid black"}}>{value.mentorid || value.id}</td>
                        <td scope="row" style={{ border: "1px solid black"}}>{value.name}</td>
                        <td scope="row" style={{ border: "1px solid black"}}>{value.emailid}</td>
                        <td scope="row" style={{ border: "1px solid black"}}>{value.Specialization}</td>
                        <td scope="row" style={{ border: "1px solid black"}}>  
                          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" style={{
                                          background: "skyblue",
                                          color: "white",
                                          fontSize: "14px",
                                          borderRadius: "5px",
                                          fontWeight: "100",
                                          display:"flex"
                                        }} onClick={()=>{getProducts(value.id)}}><span style={{display:"flex",padding:"2px" }}><FaStreetView/>View</span></button></td>
                           <td scope="row" style={{ border: "1px solid black"}}>{value.studentassigned? <div style={{display:"flex"}}><TiTick style={{color:"green"}}/><Link to={`/editmentorlist/${value.id}`} style={{textDecoration:"none"}}>
                        <button style={{
                                          background: "violet",
                                          color: "white",
                                          fontSize: "10px",
                                          borderRadius: "5px",
                                          display:"flex",
                                          textDecoration:"none"
                                        }}><span style={{display:"flex",padding:"2px",textDecoration:"none" }}>Edit</span></button></Link></div>:<div style={{display:"flex"}}><RxCross2 style={{color:"red"}}/> <Link to={`/editmentorlist/${value.id}`} style={{textDecoration:"none"}}>
                        <button style={{
                                          background: "violet",
                                          color: "white",
                                          fontSize: "10px",
                                          borderRadius: "5px",
                                          display:"flex",
                                          textDecoration:"none"
                                        }}><span style={{display:"flex",padding:"2px",textDecoration:"none" }}>Assign Mentor</span></button></Link> </div>}</td>
                       <td scope="row" style={{ border: "1px solid black"}}><span class={value.studentsid.length?"text-success":"text-danger" }>{value.studentsid.length}</span></td>
                        <td> <Popconfirm
                          title="Confirmation Required !"
                          description="Do you want to delete this Student from List"
                          onConfirm={() =>{handleDelete(value.id)}}
                          okText="Yes"
                          cancelText="No"
                        >
                          <button style={{
                                          background: "red",
                                          color: "white",
                                          fontSize: "14px",
                                          borderRadius: "5px",
                                          fontWeight: "100",
                                          display:"flex"
                                        }}
                                      ><span style={{display:"flex",padding:"2px" }}><AiFillDelete/> Delete</span></button>
                        </Popconfirm> 
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div style={{display:"flex",justifyContent:"center"}}>
<select
                name="category"
                className="categoryselect text-center"
                style={{ height:"40px" }}
         onChange={handlepaginationnumber}
              > 
               <option value="2">2</option>
                <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                             
              </select>
              <nav className="TablePagination">
                <ul class="pagination">
                  <li class="page-item">
                    <a href="#" class="page-link" onClick={prevpage}>
                      Prev
                    </a>
                  </li>
                  {numberspage.map((value, index) => {
                    return (
                      <li
                        class={`page-item ${
                          currentpage === value ? "active" : ""
                        }`}
                        key={index}
                      >
                        <a
                          class="page-link"
                          href="#"
                          onClick={() => changecurrentpage(value)}
                        >
                          {value}
                        </a>
                      </li>
                    );
                  })}
                  <li class="page-item">
                    <a href="#" class="page-link" onClick={Nextpage}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav></div>
            </div>
          </div>
        </div>
      </div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">User Details</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close" style={{color:"red",border:"none",backgroundColor:"white"}}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ol>
          <li>Mentor Id : {solution.mentorid} </li>
          <li>Name : {solution.name} </li>
          <li>Email : {solution.emailid} </li>
          <li>Specialization : {solution.Specialization} </li>
          <li>Students Assign : {solution.studentassigned ? <><TiTick style={{color:"green"}}/></>:<><RxCross2 style={{color:"red"}}/></>}</li>
          <li>Students id : {solution.studentassigned ? <span>{solution.studentsid.map((val)=>{return<span>{val},</span>})}</span>:" "}</li>
        </ol>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
    </div>
  );
}