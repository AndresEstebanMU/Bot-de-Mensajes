const User = require('../models/user.model');


const createUser = async(req, res) => {
    try {
        const useEmail = await User.findOne({email: req.body.email})

        if(useEmail){
            throw new Error('Email en uso!')
        }

        const newUser = new User(req.body);
        await newUser.save();
        res.json({success: true, message: 'Usuario creado', info: newUser._id})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

const getUsers = async(req, res) => {
    try {
        const users  = await User.find();
        res.json({success: true, info: users});
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

const editUser = async(req, res) => {
    try {
        const { id } = req.params;
        const contain = req.body;
        const updateUser = await User.findByIdAndUpdate(id, contain, {new: true});
        res.json({success: true, msg: 'usuarios actualizado', updateUser})
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

const deleteUser =async(req, res) => {
    try {
        const { id } = req.params;
        const deleteU = await User.findByIdAndDelete(id);
        res.json({success: true, msg: 'usuario eliminado', deleteU})
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
} 


module.exports = {createUser, getUsers, editUser, deleteUser};