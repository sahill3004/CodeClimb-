const express = require('express');
const userRouter = express.Router();
const { registerUser , logInUser} = require('../controller/userController.js');



userRouter.post('/register' ,registerUser);


userRouter.post('/logIn', logInUser);


module.exports = userRouter;