const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
  date: Date,
  client:String,
  produits: [{
      produit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'prodModel',  
     
      },
      quantite: {
        type: Number,
   
      }
    }]
});

module.exports = mongoose.model('Order', orderSchema);
