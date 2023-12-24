import express from 'express';
import { getallRooms, getRoomsbyID, CreateRooms, updateroomsById,deleteroomsById} from "../helper/rooms.js";
const router = express.Router();
//to get all roms
router.get("/", async function (req, res) {
    const rooms = await getallRooms();
    res.send(rooms);
  });

//get rooms by id
router.get("/:id", async function (req, res) {
    const {id}=req.params;
    console.log(id);
    const rooms = await getRoomsbyID(id);
    rooms?
    res.send(rooms):res.status(404).send({ message: "Rooms Not Found" });
  });

//to create rooms
router.post("/addrooms", async function (req, res) {
    const newrooomdata = req.body;
    console.log(newrooomdata);    
    const newrooms = await CreateRooms(newrooomdata);
    res.send(newrooms);
  });

  //Update Room by ID
router.put("/editroom/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id);
    const updatedrooms = req.body;
    console.log(updatedrooms);
    const rooms = await updateroomsById(id, updatedrooms);
    res.send(rooms);
  });

  //Delete Rooom by ID
  router.delete("/deleterooms/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id);
    const rooms = await deleteroomsById(id);
    res.send(rooms);
  });


  export const RoomRouter = router;