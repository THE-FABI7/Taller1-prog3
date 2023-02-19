const mongoose = require("mongoose");

const sioSchemas = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  fecha_creacion: {
    type: Date,
    required: true,
  },
  navegador: {
    type: String,
    required: true,
  },
});


module.exports = sioSchemas;