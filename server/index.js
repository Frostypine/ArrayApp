//
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/routes.js";



const app = express();
const PORT = (process.env.PORT || 5000);
const CONNECTION = "mongodb://localhost:27017/arraydb";



//middlewares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
 

//router
app.use("/api", routes);

//start server
//connect to mongodb
mongoose.connect(CONNECTION, (err) => {
  if (err) throw err;
  console.log("connected to ArrayAppDB");

  app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
     });
  
  });

