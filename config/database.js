const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Base de datos conectada con exito!'))
    .catch(() => {
        console.log('La conexión a la base de datos Falló')
    });
    