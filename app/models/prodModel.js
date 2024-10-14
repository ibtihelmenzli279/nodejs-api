const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  prix: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  images: {  // Nouveau champ pour plusieurs images
    type: [String],  // Tableau de chaînes
  },
});

module.exports = mongoose.model('Product', productSchema);
