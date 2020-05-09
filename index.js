const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://harikrishna:12345@react-blog-9mz5p.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(5000);
