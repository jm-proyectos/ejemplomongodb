const mongoose = require("mongoose");

const servicioSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dominio: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Servicio', servicioSchema);