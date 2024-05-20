const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
const port = 8080;

const DB_URL =
  "mongodb+srv://mi7ky0vux:azmp101@cluster0.rbvowft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const AranozSchema = new Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  imageUrl: { type: String, require: true },
});

const AranozModel = mongoose.model("Aranoz", AranozSchema);
-app.get("/products", async (req, res) => {
  try {
    const aranoz = await AranozModel.find({});

    if (aranoz.length > 0) {
      res.status(200).send({ data: "Success", data: aranoz });
    } else {
      res.status(204).send({ message: "Not Found", data: null });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/", async (req, res) => {});
app.get("/", async (req, res) => {});
app.get("/", async (req, res) => {});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
