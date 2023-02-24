const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
require("dotenv").config();
const hostIp = process.env.HOST_IP;
const apiIP = process.env.API_IP;
const hostname = hostIp;
const port = 3000;

const app = express();
app.use(express.static("LiveEarlReaction"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "LiveEarlReaction/public", "index.html"));
});
app.get("/data", (req, res) => {
  res.json({ value: apiIP });
});
app.listen(port, () =>
  console.log(`server ${hostname} started on port ${port}`)
);
