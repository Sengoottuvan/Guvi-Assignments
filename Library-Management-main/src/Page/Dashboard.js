import React,{useEffect, useState} from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Navbar from "../Components/Navbar";
import './Page.css'


export default function Dashboard(){

    const [productData, setProductData] = useState([]);
    const[paginationnumber,setpaginationnumber]=useState(10);
    const [filteredstatus, setfilteredstatus] = useState("");
    const [filteredcards, setfilteredcards] = useState([]);
    const [str, setStr] = useState("");

    useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = () => {
      fetch("https://64a506e800c3559aa9beef5d.mockapi.io/books")
        .then((data) => data.json())
        .then((res) => {setProductData(res);
          setfilteredcards(res);
        });
    };
// console.log(filteredcards);
// console.log(productData);
    function handleInputstatus(e) {
      const { value } = e.target;
      setfilteredstatus(value);
      // console.log(value);
    }

    function searchstatus() {
      // console.log(filteredstatus);
      searchstatuscontent(filteredstatus);
    }

    function searchstatuscontent(sttr) {
      const displaytickets = productData.filter((row) => {
        if (sttr == "Adventure Fiction") {
          return row.category == "Adventure Fiction";
        }
        if (sttr == "Articles") {
          return row.category == "Articles";
        }
        if (sttr == "Auto Biography") {
          return row.category == "Auto Biography";
        } 
        if (sttr == "Biology") {
          return row.category == "Biology";
        } 
        if (sttr == "Science Fiction") {
          return row.category == "Science Fiction";
        }   
        if (sttr == "Travel Literature") {
          return row.category == "Travel Literature";
        }       
        else {
          return productData;
        }
      });
      // console.log(displaytickets);
      setfilteredcards(displaytickets);
    }

    function handleInput(e) {
      const { value } = e.target;
      setStr(value);
      if (value == "") {
        setfilteredcards(productData);
      }
    }
    // console.log(displaymyhistorycards);
    function searchtickets() {
      serchcontent(str);
    }
    function serchcontent(sttr) {
      const displaytickets = productData.filter((row) =>
        row.name.toLowerCase().includes(sttr.toLowerCase()) || row.author.toLowerCase().includes(sttr.toLowerCase())
      );
      setfilteredcards(displaytickets);
    }
  

    const [currentpage, setCurrenpage] = useState(1);
    const recordsperpage =paginationnumber;
    const lastIndex = currentpage * recordsperpage;
    const firstIndex = lastIndex - recordsperpage;
    const records = filteredcards.slice(firstIndex, lastIndex);
    const noofpages = Math.ceil(filteredcards.length / recordsperpage);
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
    return(<Navbar>
        <div className="topcontent d-flex justify-content-between">
          <div className="div1dashboard text-start" >
           <div className="div1dashboardcontent">
           <select
                name="category"
                className="categoryselect text-center"
                style={{ marginBottom: "7px" }}
                onChange={handleInputstatus}
              >
                <option value="">All</option>
                <option value="Adventure Fiction">Adventure Fiction</option>
                <option value="Articles">Articles</option>
                <option value="Auto Biography">Auto Biography</option>
                <option value="Biology">Biology</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Travel Literature">Travel Literature</option>                
              </select>
            <div><button
                   onClick={searchstatus}
                   style={{
                     background: "blueviolet",
                     border: "2px solid violet",
                     color: "white",
                     fontSize: "18px",
                     borderRadius: "10px",
                     fontWeight: "500",
                   }}
            >Filter Books</button></div>
           </div>
          </div>
          <div class="input-group rounded  searchbardashboard">
            <input
              id="searchbar"
              type="search"
              class="form-control rounded searchbarinput"
              placeholder="Search book or author name here..."
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={handleInput}
            />
            <span class="input-group-text border-0" id="search-addon">
              <button
                type="button"
                class=" searchbuttondashboard"
                onClick={searchtickets}
                disabled={!productData}
              >
                <BiSearchAlt2 className="searchbuttonsize" />
              </button>
            </span>
          </div>
        </div>
<div style={{margin:"2%",height:"75vh"}}>
    {productData ?
<div className="Tablecard-body">
              <table class="table">
                <thead>
                  <th scope="col">Book Serial.no</th>
                  <th scope="col">Book Category</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Price</th>
                  
                </thead>
                <tbody>
                  {productData ? records.map((value) => {
                    return (
                      <tr key={value.id}>
                        <td scope="row">{value.id}</td>
                        <td>{value.category}</td>
                        <td>{value.name}</td>
                         <td>{value.author}</td>
                        <td>{value.price}</td>
                       
                      </tr>
                    );
                  }): " "}
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
             : <div class="spinner-border text-primary" role="status">
             <span class="sr-only"></span>
           </div> }


</div>
    </Navbar>);
}