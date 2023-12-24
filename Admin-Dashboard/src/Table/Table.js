import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";

export default function Table() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://643ced99f0ec48ce904ce517.mockapi.io/api/users")
      .then((data) => data.json())
      .then((response) => setUserData(response));
  }, []);

  const [currentpage, setCurrenpage] = useState(1);
  const recordsperpage = 10;
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

  {
    /* <div class="row container-fluid">

<div class="col-lg-6">

    <div >
        <div ></div> */
  }

  return (
    <div>
      <Navbar />
      <div className="row Tablecontent container-fluid">
        <div class="col-lg-12 text-center mt-5">
          <div class="card shadow mb-4">
            <div class="card-header py-3 text-center">
              {" "}
              <h4>User Details</h4>
            </div>
            <div className="card-body">
              <table>
                <thead>
                  <th>S.No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Id</th>
                  <th>Mobile.No</th>
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>

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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}