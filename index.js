const express = require('express');
const app = express();
const productRouter = require('./routes/messageRoute');
const userRouter = require('./routes/UserRoute')
require('dotenv').config();
require('./config/database');

app.use(express.json());
app.use(productRouter);
app.use(userRouter);



app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`)
});
