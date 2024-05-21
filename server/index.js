const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors = require("cors");
const bodyParser = require("body-parser");
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

app.get("/products", async (req, res) => {
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
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await AranozModel.findById(id);
    if (product) {
      res.status(200).send({ message: "Success", data: product });
    } else {
      res.status(204).send({ message: "Not Found Data" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await AranozModel.findByIdAndDelete(id);
    if (products) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(404).send({ message: "Not data" });
    }
  } catch  (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/products", async (req, res) => {
try {
  const NewProduct = AranozModel({...req.body});
  await NewProduct.save();
  res.status(200).send({message: "success" })

} catch (error) {
  res.status(500).send({message: error.message})
}
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link: http://localhost:${port}`);
  });
});


// try {
//   const newProduct = new AranozModel({...req.body});
//   await newProduct.save();
//   res.status(200).send({message: "Succesfully", data: newProduct})
//     } catch (error) {
//       res.status(500).send({message: error.message})
//     }