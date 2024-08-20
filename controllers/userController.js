const User = require('../models/user.model');


const createUser = async(req, res) => {
    try {
        const useEmail = await User.findOne({email: req.body.email})

        if(useEmail){
            throw new Error('Email en uso!')
        }

        const newUser = new User(req.body);
        await newUser.save();

    } catch (error) {
        
    }
}