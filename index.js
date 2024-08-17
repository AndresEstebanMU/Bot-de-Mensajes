const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRouter = require('./routes/messageRoute');
require('dotenv').config();
require('./config/database');

app.use(bodyParser.json());
app.use(productRouter);



app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`)
});
