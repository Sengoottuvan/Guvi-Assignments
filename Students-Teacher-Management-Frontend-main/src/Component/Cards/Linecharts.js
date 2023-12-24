import React from "react";
import './chart.css';
import Chart from 'react-apexcharts';


function LineChart() {
  const data = {
    series: [
      {
        name: "Earnings Overview $",
        data: [0,10000,15000,20000,25000,30000,35000],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-04-10T00:00:00.000Z",
          "2023-04-10T01:30:00.000Z",
          "2023-04-10T02:30:00.000Z",
          "2023-04-10T03:30:00.000Z",
          "2023-04-10T04:30:00.000Z",
          "2023-04-10T05:30:00.000Z",
          "2023-04-10T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };



  return (<div>
<div className="LinechartArea">
<Chart options={data.options} series={data.series} type="area"/>
</div>


</div>);
}

export default LineChart;