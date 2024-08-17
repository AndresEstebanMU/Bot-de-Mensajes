const Mensajes = require("../models/Mensajes.model");


const getMessage = async(req, res) => {
    try {
        const mensaje = await Mensajes.find();
        res.json({success: true, msg: "Frase", info: mensaje})
    } catch (error) {
        res.json({success: false, msg: error.message})
    }
}


const getMessageById = async(req, res) => {
    try {
        const { id } = req.params;
        const mensajeId = await Mensajes.findById(id);
        res.json({success: true, msg: "Frase", info: mensajeId})
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}


const createMessage = async(req, res) => {
    try {
        const newMessage = new Mensajes(req.body);
        await newMessage.save();
        
        res.json({success: true, msg: "Mensaje creado!", info: newMessage})
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}


const updateMessage = async(req, res) => {
    try {
        const { id } = req.params;
        const updateMessage = await Mensajes.findByIdAndUpdate(id, req.body)

        if (!updateMessage) {
            return res.status(404).json({message: "Message product not found"});
        }

        const updatedMessage = await Mensajes.findById(id);

        res.json({success: true, msg: "Mensaje actualizado!", info: updatedMessage})

    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}


const deleteMessage = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedMessage = await Mensajes.findByIdAndDelete(id)

        if(!deletedMessage) {
            return res.status(404).json({message: "Mensaje no encontrado"})
        }

        res.json({success: true, msg: "Mensaje eliminado!"})

    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}



module.exports = {getMessage, createMessage, getMessageById, updateMessage, deleteMessage}