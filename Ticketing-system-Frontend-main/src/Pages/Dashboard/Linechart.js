import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { fetchAllTickets} from "../../Redux/Tickets/ticketsAction";
import { useSelector, useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function LineChart () {
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
      backgroundColor: "rgb(233, 250, 135)",
      borderColor: "rgb(237, 75, 75)",
      data: Ratings,
    },
  ],
};

  return (
    <div style={{height:"40vh",width:"100%", display:"flex",justifyContent:"center"}}>
      <Line data={data} style={{backgroundColor:"rgb(154, 159, 248)",borderRadius:"5px",height:"300px"}} data-aos="zoom-in" data-aos-duration="2000"/>
    </div>
  );
};

