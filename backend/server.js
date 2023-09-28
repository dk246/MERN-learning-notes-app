//const express = require("express");
import express from "express";
const app = express();
import dotenv from "dotenv";
//const notes = require("./data/notes");
import notes from "./data/notes.js";
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
