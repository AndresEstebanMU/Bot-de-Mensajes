const express = require('express');
const userRouter = express.Router();

userRouter.route('/user')
    .post(createUser)