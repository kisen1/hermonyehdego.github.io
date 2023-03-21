const express=require('express');
const router=express.Router();





router.get("/", (req, resp)=>{
    resp.send("user lists")
})


router.get("/newme ", (req, resp)=>{
    resp.send("user lists form new ")
})

router.get("/:id", (req, res)=>{
    res.send(`get user with id ${req.params.id} `)
})
module.exports=router;