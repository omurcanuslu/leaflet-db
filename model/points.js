const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// <----------  DB veri tan�mlar�---------------->
const PointCoordinatesSchema  = new Schema({
  lng: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  datetime: { 
    type: String,
     required: true },
});
// <----------/  ----->
module.exports = mongoose.model("PointCoordinates", PointCoordinatesSchema);
