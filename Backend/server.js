const dotenv=require('dotenv')

const cors = require("cors");
app.use(cors());
dotenv.config()
const express=require('express');
const workoutRoutes=require('./Routes/workouts')
const userRoutes=require("./Routes/user")
const mongoose=require('mongoose')

const app=express()
const PORT= process.env.PORT || 2000;
// Middleware

app.use(express.json());//used to add data in json format
app.use((req,res,next)=>{
    console.log(req.path,res.method);
    next()
    
})


// Routes of home page
app.get("/",(req,res)=>{
    res.json({
        msg:"Welcome To Our Application "
    })
})
app.use("/api/workouts",workoutRoutes)
app.use("/api/user",userRoutes)

// connection to database
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    // app listen on port
    app.listen(PORT,()=>{
    console.log(`server is up and running on port http://localhost:${PORT}`);
    console.log("Connected to DB Successfully.....");
})
})
.catch((error)=>{console.log(error);})

