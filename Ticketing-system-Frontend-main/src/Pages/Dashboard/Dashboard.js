import React from "react";
import Defaultpage from "../../Components/Defaultpage";
import './Dashboard.css';
import Grid from "@mui/material/Grid";
import LineChart from './Linechart';
import Barchart from './Barchart';
import PieChart from "./piechart";

export default function Dashboard() {
return( 
    <Defaultpage>
   <Grid
          container
          item={true}
          justifyContent="flex-start"
  alignItems="flex-start">             
            <Grid item={true} xs={12} sm={12} md={6} lg={6} className="text-start">
              <div className="dashboardleftpart" style={{margin:"2%"}}><div style={{display:"flex",justifyContent:"center",fontSize:"20px",color:"blue"}}>Mentor Ratings for quries</div><LineChart/></div>
            </Grid>
            <Grid item={true} xs={12} sm={12} md={6} lg={6} className="text-start">
            <div className="dashboardleftpart" style={{margin:"2%"}}><div style={{display:"flex",justifyContent:"center",fontSize:"20px",color:"blue"}}>Our Queries Solving Count day by day</div><Barchart/> </div>
            </Grid>
             </Grid>
             <div className="bottomtabchart">
            <div className="dashboardleftpart2"><h5 style={{color:"blue"}}>Our Queries Solving Count day by day</h5><div><PieChart/></div> </div></div>

</Defaultpage>);

}