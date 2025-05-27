const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute.js');


const port = 5000;
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/user', userRouter);

app.use('/api/user', userRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
