import "./setup";
import express from "express";
import cors from "cors";
import {  addSong  } from "./controllers/recommendationsController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("OK!");
});

app.post("/recommendations", addSong);
app.post("/recommendations/:id/upvote");

export default app;
