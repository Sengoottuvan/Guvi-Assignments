import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import {AiFillDelete,AiFillEdit} from 'react-icons/ai';
import {FaStreetView} from 'react-icons/fa';
import {message, Popconfirm } from "antd";
import { Link } from "react-router-dom";


export default function Table() {
  const [userData, setUserData] = useState([]);
  const[paginationnumber,setpaginationnumber]=useState(10);
  const [solution, setSolution] = useState({});
  useEffect(() => {
    fetch("https://64a506e800c3559aa9beef5d.mockapi.io/users")
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
  fetch("https://64a506e800c3559aa9beef5d.mockapi.io/users/" + id, {
    method: "DELETE"
  })
    .then((data) => data.json())
    .then((res) => {
      message.success(`User id ${res.id} Deleted`);
    });
    setTimeout(()=>{
      window.location.reload();
    },1500);  
};

const getProducts = (id) => {
  fetch("https://64a506e800c3559aa9beef5d.mockapi.io/users/" + id)
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
              <h4>User Details</h4>
            </div>
              <div class="text-end">
              <h4><Link className="Sidebarlink"  to='/usersignup'><button
                   style={{
                     background: "blue",
                     border: "1px solid white",
                     color: "white",
                     fontSize: "18px",
                     borderRadius: "5px",
                     fontWeight: "100",
                     display:"flex"
                   }}
            >Add User</button></Link></h4>
            </div>
            </div>
            <div className="card-body">
              <table>
                <thead>
                  <th>S.No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Id</th>
                  <th>Mobile.No</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </thead>
                <tbody>
                  {records.map((value) => {
                    return (
                      <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.Firstname}</td>
                        <td>{value.lastname}</td>
                        <td>{value.Emailid}</td>
                        <td>{value.Mobileno}</td>
                        <td>  
                          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" style={{
                                          background: "skyblue",
                                          color: "white",
                                          fontSize: "14px",
                                          borderRadius: "5px",
                                          fontWeight: "100",
                                          display:"flex"
                                        }} onClick={()=>{getProducts(value.id)}}><span style={{display:"flex",padding:"2px" }}><FaStreetView/>View</span></button></td>
                        <td> <Link to={`/edituser/${value.id}`}>
                        <button style={{
                                          background: "blueviolet",
                                          color: "white",
                                          fontSize: "14px",
                                          borderRadius: "5px",
                                          fontWeight: "100",
                                          display:"flex"
                                        }}><span style={{display:"flex",padding:"2px" }}><AiFillEdit/> Edit</span></button></Link></td>
                        <td> <Popconfirm
                          title="Confirmation Required !"
                          description="Do you want to delte this user"
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
          <li>User Id : {solution.id} </li>
          <li>Fisrt Name : {solution.Firstname} </li>
          <li>Last Name: {solution.lastname} </li>
          <li>Email id: {solution.Emailid} </li>
          <li>Mobile Number: {solution.Mobileno} </li>
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
