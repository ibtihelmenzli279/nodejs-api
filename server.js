const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://ibtihelmenzli279:2I6XQBmZVFcJKkiy@cluster0.xwgp4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0git init", 
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running :D" });
});

let PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});