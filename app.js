//import modules 
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express ();




//MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("DB CONNECTED"))
    .catch((err)=> console.log("DB connection error", err));


//middle-ware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));





//routes 
const testRoutes = require("./routes/test");
app.use("/",testRoutes);




//port 
const port = process.env.PORT || 8080;


//listener 

const server = app.listen(port, () => 
    console.log(`The server is running on ${port}. No cap.` )
);