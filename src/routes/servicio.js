const express = require("express");
const servicioSchema = require("../models/servicio");

const router = express.Router();

// create servicio
router.post("/servicios", (req, res) => {
  const servicio = servicioSchema(req.body);
  servicio
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all servicios
router.get("/servicios", (req, res) => {
  servicioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a servicio
router.get("/servicios/:id", (req, res) => {
  const { id } = req.params;
  servicioSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a servicio
router.delete("/servicios/:id", (req, res) => {
  const { id } = req.params;
  servicioSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a servicio
router.put("/servicios/:id", (req, res) => {
  const { id } = req.params;
  const { name, dominio } = req.body;
  servicioSchema
    .updateOne({ _id: id }, { $set: { name, dominio } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;