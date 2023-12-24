import React from "react";
import './chart.css';
import Chart from 'react-apexcharts';

export default function Barchart(){
    const data3={ 
        options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"]
        }
      },
      series: [
        {
          name: "Earnings",
          data: [50, 100, 150, 200, 250, 30, 350, 400,300,50,250,40]
        }
      ]
    }

    return (
      <div>
        
    <div className="BarchartArea">
    <Chart options={data3.options} series={data3.series} type="bar"  />
    </div></div>
    );
    }
