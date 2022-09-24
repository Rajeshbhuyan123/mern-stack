import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors())

await mongoose.connect(
  "mongodb+srv://rajesh:rajesh123@mern.wnwwxer.mongodb.net/?retryWrites=true&w=majority"
);
console.log("Mongodb sucessfully connected");

app.get("/", (req, res) => {
  res.json("Working fine");
});

app.listen(8000, () => {
  console.log("It is in port 8000");
});
