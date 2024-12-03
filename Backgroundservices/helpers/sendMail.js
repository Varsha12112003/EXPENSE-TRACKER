const nodemailer=require("nodemailer");
const dotenv=require("dotenv");
dotenv.config();


function createTransporter(config){



    const transporter=nodemailer.CreateTransport(config);
    return transporter;
}
let configurations={
    service:"gmail",
    host:"expensetracker",
    port:587,
    requireTLS:true,
    auth:
    {
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
}


const sendMail=async(messageOption)=>{
const transporter=await createTransporter(configurations);
await transporter.verify();
await transporter.sendmail(messageOption,(error,info)=>{
    if(error){
        console.log(error)
    }
    console.log(info.response);
})
}
module.exports=sendMail;




