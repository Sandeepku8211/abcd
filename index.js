const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnection = require('./config/dbConnection');

dotenv.config();

app.get('/', (req,res)=>{
    res.send("welcome");
})
app.use(express.json());
const PORT = process.env.PORT || 3000
app.listen(PORT, (req,res)=>{
    console.log(`server is running ${PORT}`)
})

const todoRoutes = require('./routes/todor');
app.use('/api/v1',todoRoutes)

dbConnection();