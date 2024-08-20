const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Nombre no especificado",
        trim: true,
        minLength: 2
    },
    email: {
        type: String,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g],
        required: true
    }

},
    {
        timestamps: true
    }
);

const User = mongoose.model('user', userSchema);

module.exports = User;