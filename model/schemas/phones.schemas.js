const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
/**Needed schema for phones */
const phonesSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
    unique: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  año_lanzamiento: {
    type: Date,
    required: true,
    min: new Date("2010-01-01"),
    max: new Date("2023-02-01"),
  },
  almacenamiento: {
    type: String,
    required: true,
  },
  camara: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 100000,
    max: 7000000
  },
});

phonesSchema.plugin(validator);
module.exports =  phonesSchema;