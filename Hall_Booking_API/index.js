import express from "express";
import { MongoClient } from "mongodb";
import {RoomRouter} from './routes/roomrouter.js';
import {CustomerRouter} from './routes/Customerroutes.js';
import * as dotenv from "dotenv"
dotenv.config();
const app = express();


const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
//In-built middleware
app.use(express.json());
//mongodb connection
async function Mongodbconnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MONGO DB CONNECTED SUCCESSFULLY");
  return client;
}
 export const client = await Mongodbconnection();


//Rest API Endpoints
app.get("/", function (req, res) {
  res.send("Hi 🙋‍♂️ Welcome to my Website🙏");
});


app.use("/rooms", RoomRouter);
app.use("/customer", CustomerRouter);

app.listen(PORT, () => console.log(`Server Started at ${PORT} 🎉`));