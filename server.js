// Import necessary dependencies
const express = require("express"); // framework for building web applications
const mongoose = require("mongoose"); // object modeling tool for MongoDB
const personRouter = require("./routers/person.router.js"); // router for handling person-related routes
const cors = require("cors"); // middleware for handling Cross-Origin Resource Sharing (CORS)
const connect = require("./config/connect.js");

// Create an instance of express
const app = express();

const port = 3006;
app.use(
  cors({
    origin: "*",
  })
);
// Enable Cross-Origin Resource Sharing (CORS) for all routes

// Parse incoming requests with JSON payloads
app.use(express.json());

connect();
// Use the person router for all requests that start with /person
app.use("/person", personRouter);

//Running server
app.listen(port, (err) => {
  err
    ? console.log("something went wrong with the server")
    : console.log(`we are running on .. http://localhost:${port}`);
});
