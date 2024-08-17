const mongoose = require('mongoose');

const mensajeSchema = new mongoose.Schema({
   saludos: {
      type: String
   },

   horoscopo: {
      type: String
   },

   frasesDePeliculas: {
      type: String
   }
},
   {
      timestamps: true
   }
);

const Mensajes = mongoose.model("Categoria", mensajeSchema);

module.exports = Mensajes;