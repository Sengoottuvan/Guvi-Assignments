import { Pie } from 'react-chartjs-2';
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { fetchAllTickets} from "../../Redux/Tickets/ticketsAction";
import { useSelector, useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function PieChart () {
const dispatch = useDispatch();
const [displaycards, setDisplaycards] = useState();    
const { tickets, isLoading, error,ticketstatus } = useSelector((state) => state.tickets);

useEffect(() => {
      if (tickets.length === 0) {
        dispatch(fetchAllTickets());
      }
  }, [dispatch]);
const labels = tickets.map(val=>val.createdAt.split('T')[0]);
const Ratings=tickets.map(val=>val.rating);
const data = {
  labels: labels,
  datasets: [
    {
      label: "Ratings",
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      data: Ratings,
    },
  ],
};

  return (
    <div style={{height:"40vh",width:"100%", display:"flex",justifyContent:"center"}}>
      <Pie data={data} style={{borderRadius:"5px",height:"300px"}} data-aos="zoom-in" data-aos-duration="2000"/>
    </div>
  );
};
