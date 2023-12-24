import React from "react";
import "./Defaultpage.css";
import {MdReportProblem} from 'react-icons/md';

export default function Footertab(){
return(
<footer className="bg-light text-center text-lg-start mt-3">
  <div class="text-center p-3 footersection" >
    <span className="Footername">MERN<MdReportProblem className="footericon"/> Query Ticketing System  </span> 
  </div>
</footer>

);

}