const  express=require("express");
const cors =require("cors");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const expenseRoute=require("./routes/expense");


dotenv.config();
const app=express();



app.use(cors());
app.use(express.json());





app.use("/expenses",expenseRoute);




mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log('DB CONNECTION IS SUCCESSFULL.')
}).catch((err)=>{
    console.log(err)
})




app.listen(process.env.PORT,()=>
{
    console.log('SERVER IS RUNNING ON PORT ${process.env.PORT}')
})

