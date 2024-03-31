require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PointCoordinates = require("./model/points");
var cors = require("cors");
const app = express();
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGODB_URI);
app.use(express.json());
app.use(cors());

// <----------  Tüm Koordinatlar Endpoint---------------->
app.get("/coordinates", async (req, res) => {
  try {
    const coordinates = await PointCoordinates.find();
    res.json(coordinates);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// <----------/  ----->
// <----------  Koordinat Ekleme Endpoint---------------->
app.post("/coordinates", async (req, res) => {
  try {
    const newCoordinate = await PointCoordinates.create(req.body);
    res.json(newCoordinate);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// <----------/  ----->

// <----------  Koordinat Silme Endpoint---------------->
app.delete("/coordinates/:id", async (req, res) => {
  try {
    const result = await PointCoordinates.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: "Koordinat bulunamadý" });
    }
    res.json({ msg: "Koordinat baþarýyla silindi" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
 // <----------/  ----->

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
