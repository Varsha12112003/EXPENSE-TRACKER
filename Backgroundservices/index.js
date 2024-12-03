const  express=require("express");
const cron =require("node-cron");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");

dotenv.config();


mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>
    {
        console.log(err)
    });

const run =()=>{
    cron.schedule('* * * * * *', () => {
        console.log('running a task every second');
      });
}
 run();  


 
app.listen(process.env.PORT,()=>
    {
        console.log(`server running on port ${process.env.PORT}`);

        //console.log("server running ${process.env.PORT}")
    })