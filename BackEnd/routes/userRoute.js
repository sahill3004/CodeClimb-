const express = require('express');
const userRouter = express.Router();



userRouter.post('/register' , (req, res) =>{
        res.send("Hello user register")
});


userRouter.post('/logIn',(req, res) =>{
        res.send("Hello user log in")
});


module.exports = userRouter;