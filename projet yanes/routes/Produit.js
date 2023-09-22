const express = require("express");
const produitRouter = express.Router();
const produitS = require("../models/Produit");

// add new produit
produitRouter.post("/add", async (req, res) => {
  try {
    const jdid = new produitS(req.body);
    const result = await jdid.save();
    res.send({ produitjdid: result, msg: "produit is saved" });
  } catch (error) {
    console.log(error);
  }
});

// get all produits
produitRouter.get("/all", async (req, res) => {
  try {
    const result = await produitS.find();
    res.send({ list: result, msg: "list of produits" });
  } catch (error) {
    console.log(error);
  }
});

// get by id
produitRouter.get("/:id", async (req, res) => {
  try {
    const result = await produitS.findById({ _id: req.params.id });
    res.send({ produit: result, msg: "voici produit" });
  } catch (error) {
    console.log(error);
  }
});

// delete of produit
produitRouter.delete("/:id", async (req, res) => {
  try {
    const result = await produitS.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "produit deleted" });
  } catch (error) {
    console.log(error);
  }
});

// update of produit
produitRouter.put("/:id", async (req, res) => {
  try {
    const result = await produitS.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "produit updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = produitRouter;
