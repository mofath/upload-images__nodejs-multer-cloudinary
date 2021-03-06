const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const uploadController = require("./controller");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/cloudinary", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e.message));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("images"));

app.post("/image", uploadController);
app.use("/image", express.static('images'));

app.listen(5000, () => console.log("Server is listening on port 5000"));
