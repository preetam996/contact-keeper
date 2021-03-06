const { request } = require('express');
const express = require('express')

const app =  express();

app.get('/',(req,res)=>res.send('hello World'))

//Define the routes

app.use("/api/users",require("./routes/users"))
app.use("/api/auth",require("./routes/auth"))
app.use("/api/contact",require("./routes/contact"))

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server Started on port ${PORT}`))