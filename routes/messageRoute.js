const express = require('express');
const {getMessage, createMessage, getMessageById, updateMessage, deleteMessage} = require('../controllers/messageControllers');

const productRouter = express.Router();


productRouter.route('/mensajes')
    .get(getMessage)
    
productRouter.route('/mensaje/:id')  
    .get(getMessageById)

productRouter.route('/crearMensaje')
    .post(createMessage)

productRouter.route('/mensaje/:id')
    .put(updateMessage)

productRouter.route('/mensaje/:id')
    .delete(deleteMessage)


module.exports = productRouter; 