import React from "react";
import Navbar from "../Navbar/Navbar";
import { Button,Card,CardBody,CardTitle,CardText,CardSubtitle,CardLink } from "reactstrap";
import './Component.css';
import Cards from '../Cards/Cards';

export default function Component() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid Componentdashboard">
        <div>
          <h1>Components</h1>
          {/* Buttons */}
         <div className="gridscontent">
          <div className="Buttonsgrid">
            <h2>Buttons</h2>
            <div>
              <Button color="primary">primary</Button>
            </div>
            <div>
              <Button>secondary</Button>
            </div>
            <div>
              <Button color="success">success</Button>
            </div>
            <div>
              <Button color="info">info</Button>
            </div>
            <div>
              <Button color="warning">warning</Button>
            </div>
            <div>
              <Button color="danger">danger</Button>
            </div>
            <div>
              <Button color="link">link</Button>
            </div>
          </div>
         {/* Designs */}

         <div className="Cardsgrid">
            <h2>Cards</h2>
              <Cards/>
           


      
           
          </div>


         



          </div>
        </div>
      </div>
    </div>
  );
}
