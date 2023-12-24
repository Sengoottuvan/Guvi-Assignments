import express from 'express';
import { getallcustomers,getroomdetails,addbooking,changeroomstatus,getallbookedroomsstatus,getBookingStatus,getallcustomersdata,getcustomersroomdata} from "../helper/Customer.js";
const router = express.Router();
//to get all roms
router.get("/", async function (req, res) {
    const rooms = await getallcustomers();
    res.send(rooms);
  });

//to create Customers
router.post("/bookroom",async (req, res) => {
const { Customer_id,
    Room_id,
    Customer_Name,
    date,
    StartTime,
    EndTime} =  req.body;
    const setdate=new Date(date);
console.log(Customer_id,
    Room_id,
    Customer_Name,
    setdate,
    StartTime,
    EndTime);
    const isroomDetails = await getroomdetails(Room_id,setdate,
        StartTime,
        EndTime)
    console.log(isroomDetails,"room booked")
    if(isroomDetails){
        res.send({ message:"Already Booked" })
    }else{
        const result = await addbooking(
            Customer_id,
    Room_id,
    Customer_Name,
    setdate,
    StartTime,
    EndTime
        );
        const changeroomstatustobooked = changeroomstatus(Room_id);
        res.send({result,changeroomstatustobooked});
    }
});

//get all booked rooms with booked status
router.get("/getallbookedrooms", async function (req, res) {
    const rooms = await getallbookedroomsstatus();
    res.send(rooms);
  });

  //get all rooms with booked data
  router.get("/roomsstatus", async function(req,res){
    const rooms = await getBookingStatus();
      console.log(rooms);
    res.send(rooms);
});
//all customers with data
router.get("/customersdata", async function (req, res) {
    const rooms = await getallcustomersdata();
    res.send(rooms);
  });

 //to get how many times customer booked the room

 router.get("/customersroomdata", async function (req, res) {
    const rooms = await getcustomersroomdata();
    res.send(rooms);
  });

  export const CustomerRouter = router;