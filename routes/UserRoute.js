const express = require('express');
const userRouter = express.Router();
const {createUser, getUsers, editUser, deleteUser} = require('../controllers/userController')

userRouter.route('/user')
    .post(createUser)
    .get(getUsers)

userRouter.route('/user/:id')
    .put(editUser)
    .delete(deleteUser)


module.exports = userRouter;