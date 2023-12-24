import PieChart from "./Piechart";
import LineChart from "./Linecharts";

export default function Charts(){
    
   return( <div className="Chartsarea">

<div class="row container-fluid">

<div class="col-lg-6">

    <div class="card shadow mb-4">
        <div class="card-header py-3">
         <h4 class="m-0 font-weight-bold text-center">Earnings Overview</h4>
        </div>
        <div class="card-body">
        <LineChart/>
        </div>
        </div>
        </div>
        <div class="col-lg-6">

    <div class="card shadow mb-4">
        <div class="card-header py-3">
         <h4 class="m-0 font-weight-bold text-center">Revenue Sources</h4>
        </div>
        <div class="card-body">
        <PieChart/>
        </div>
        </div>
        </div>
        </div>
   
   </div> );
}