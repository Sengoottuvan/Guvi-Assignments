import React from "react";
import './chart.css';
import Chart from 'react-apexcharts';

function PieChart() {
  const data2={
    options: {},
    series: [65,15,20],
    labels: ["Social","Referral","Direct"]
  };
return (
  <div>
    
<div className="PiechartArea">
<Chart options={data2.options} series={data2.series} type="donut"  />
</div></div>
);
}

export default PieChart;
