import express, { Request, Response } from 'express';
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
const userRouter = require('./routes/user'); 
const doctorRouter = require('./routes/doctor'); 
const infoRouter = require('./routes/info'); 
const adminRouter = require('./routes/admin'); 

app.get('/', (req, res) => {
  res.json('Hi');
});


app.use('/user',userRouter)
app.use('/doctor',doctorRouter)
app.use('/info',infoRouter)
app.use('/admin',adminRouter)

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server up and running on Port ${PORT}`);
});
