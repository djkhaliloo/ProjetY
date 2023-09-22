const express = require("express");
const commandeRouter = express.Router();
const commandeS = require("../models/Commandes");

// add new commande
commandeRouter.post("/add", async (req, res) => {
  try {
    const jdid = new commandeS(req.body);
    const result = await jdid.save();
    res.send({ commandejdid: result, msg: "commande is saved" });
  } catch (error) {
    console.log(error);
  }
});

// get all commandes
commandeRouter.get("/all", async (req, res) => {
  try {
    const result = await commandeS.find();
    res.send({ list: result, msg: "list of commandes" });
  } catch (error) {
    console.log(error);
  }
});

// get by id
commandeRouter.get("/:id", async (req, res) => {
  try {
    const result = await commandeS.findById({ _id: req.params.id });
    res.send({ commande: result, msg: "voici commande" });
  } catch (error) {
    console.log(error);
  }
});

// delete of commande
commandeRouter.delete("/:id", async (req, res) => {
  try {
    const result = await commandeS.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "commande deleted" });
  } catch (error) {
    console.log(error);
  }
});

// update of commande
commandeRouter.put("/:id", async (req, res) => {
  try {
    const result = await commandeS.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "commande updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = commandeRouter;
