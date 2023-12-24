import React from "react";
import "./Maindash.css";
import Cards from "../Cards/Cards";
import Charts from "../Cards/Charts"; 
import Navbar from "../Navbar/Navbar";
import { Button } from "reactstrap";
export default function Maindash() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid Maindash">
        <div className="content">
          <h1>Dashboard</h1>
          <p>
            <Button color="primary">
              {" "}
              <i className="fas fa-download fa-sm text-white-50"></i> <span className="Menubarname">Generate Report</span>
              
            </Button>
          </p>
        </div>
        <Cards />
        <Charts/>
      </div>
    </div>
  );
}
