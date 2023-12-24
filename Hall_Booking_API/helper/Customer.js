import {client} from "../index.js";

//get all customer data
export async function getallcustomers() {
  return await client
    .db("Hallbooking")
    .collection("Customerdetails")
    .find({})
    .toArray();
}

//checking room booking details
export async function getroomdetails(Room_id,setdate,
    StartTime,
    EndTime){
  return await client
    .db("Hallbooking")
    .collection("Customerdetails")
    .findOne({ Room_id:Room_id, date: setdate,
        StartTime: StartTime,
        EndTime: EndTime });
}

//booking rooms
export async function addbooking(
    Customer_id,
    Room_id,
    Customer_Name,
    setdate,
    StartTime,
    EndTime
) {
  return await client
    .db("Hallbooking")
    .collection("Customerdetails")
    .insertOne({
      Customer_id: Customer_id,
      Room_id: +Room_id,
      Customer_Name: Customer_Name,
      date: setdate,
      StartTime: StartTime,
      EndTime: EndTime,
    });
}

//changing status to Boked
export async function changeroomstatus(Room_id) {
  return await client.db("Hallbooking").collection("Rooms").updateOne({Room_id:+Room_id},{ $set: {Status: "Booked"} });
}


//Gett all booked rooms
export async function getallbookedroomsstatus() {
    return await client
      .db("Hallbooking")
      .collection("Rooms")
      .find({Status: "Booked"})
      .toArray();
  }

  

  // List all rooms with booked date and time
  export async function getBookingStatus() {
    return await client.db('Hallbooking').collection('Customerdetails').aggregate([
        { $lookup: { from: "Rooms", localField: "Room_id", foreignField: "Room_id", as: "RoomDetails" } },
        { $project: {_id:0, "RoomDetails.Room_Name": 1, "RoomDetails.Status": 1, Customer_Name: 1, date: 1, StartTime: 1, EndTime: 1 }}
    ]).toArray();
}


//customers with booked data
export async function getallcustomersdata() {
    return await client.db('Hallbooking').collection('Customerdetails').aggregate([
        { $lookup: { from: "Rooms", localField: "Room_id", foreignField: "Room_id", as: "RoomDetails" } },
        { $project: {_id:0, "RoomDetails.Room_Name": 1, Customer_Name: 1, date: 1, StartTime: 1, EndTime: 1 }}
    ]).toArray();
}

//To get how many time customers booked the room

export async function getcustomersroomdata() {
    return await client.db('Hallbooking').collection('Customerdetails').aggregate([
        { $lookup: { from: "Rooms", localField: "Room_id", foreignField: "Room_id", as: "BookingDetails" } },
        { $project: {_id:0, "BookingDetails.Room_Name": 1,"BookingDetails.Status": 1, Customer_Name: 1, date: 1, StartTime: 1, EndTime: 1, Customer_id:1, }}
    ]).toArray();
}