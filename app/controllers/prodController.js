const Produit = require("../model/prodModel.js"); // Ensure correct model import

// Create and Save a new Produit
exports.create = (req, res) => {
  // Create a new instance of Produit
  const produit = new Produit({
    nom: req.body.nom,
    description: req.body.description,
    prix: req.body.prix,
  });

  // Save the produit in the database
  produit
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Produit.",
      });
    });
};

// Retrieve all produits from the database
exports.findAll = (req, res) => {
  Produit.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving produits.",
      });
    });
};

// Find a single produit by its ID
exports.findOne = (req, res) => {
  Produit.findById(req.params.produitId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Produit not found with id " + req.params.produitId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Produit not found with id " + req.params.produitId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving produit with id " + req.params.produitId,
      });
    });
};

// Update a produit by its ID
exports.update = (req, res) => {
  // Find produit and update it with the request body
  Produit.findByIdAndUpdate(
    req.params.produitId,
    {
      nom: req.body.nom,
      description: req.body.description,
      prix: req.body.prix,
    },
    { new: true } // Return the updated document
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Produit not found with id " + req.params.produitId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Produit not found with id " + req.params.produitId,
        });
      }
      return res.status(500).send({
        message: "Error updating produit with id " + req.params.produitId,
      });
    });
};

// Delete a produit by its ID
exports.delete = (req, res) => {
  Produit.findByIdAndDelete(req.params.produitId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Produit not found with id " + req.params.produitId,
        });
      }
      res.send({ message: "Produit deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Produit not found with id " + req.params.produitId,
        });
      }
      return res.status(500).send({
        message: "Could not delete produit with id " + req.params.produitId,
      });
    });
};