const express=require("express");

const router=express.Router();
const Expense=require("../models/Expense");




router.post("/", async (req,res)=>{
   


    try{
        const newExpense =await Expense(req.body);
       const  expense = newExpense.save();
       res.status(201).json(expense);
    }
    catch(error){
        res.status(500).json(error);
    }

})





router.get("/", async (req,res)=>{
     try{
        const expenses=await Expense.find().sort({createdAt:-1});
res.status(200).json({expenses});
     }
catch(error){
    res.status(500).json(error);
}


})

router.put("/:id",async(req,res)=>{
    try{
        const expense=await Expense.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        {new:true}
);
res.status(201).json(expense);
}
    catch(error){
        
res.status(500).json(error);
    }
});


//router.delete("/:id",async(req,res)=>{
    
//try
//{
  //  await Expense.findByIdAndDelete(req.params.id);
    //res.status(201).json("DELETE SUCCESSFULLY");
//}
//catch(error)
//{
  //  res.status(500).json(error);
//}
//});
router.delete("/:id", async (req, res) => {
    try {
      const expense = await Expense.findByIdAndDelete(req.params.id);
  
      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }
  
      res.status(200).json("DELETE SUCCESSFUL");
    } catch (error) {
      console.error("Error in DELETE route:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  });
  

module.exports=router;