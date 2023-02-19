// packes
const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");

const schema = require("../schemas/sio.schemas");

db();

schema.statics = {
  create: function (data, callback) {
    let doc = new this(data);
    doc.save(callback);
  },
  getAll: function (query, callback) {
    this.find(query, callback);
  },
  getByMarca: function (query, callback) {
    this.find(query, callback);
  },
  update: function (query, data, callback) {
    this.findOneAndUpdate(query, { $set: data }, { new: true }, callback);
  },
  delete: function (query, callback) {
    this.findOneAndDelete(query);
  },
};

const dto = mongoose.model("coll_sio", schema);
module.exports = dto;
