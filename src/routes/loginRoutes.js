const express=require("express")

const loginRouter=express.Router();


function router(nav1,nav2){


loginRouter.get('/',function(req,res){
   
    res.render("login",{
        nav1,
        nav2, 
        title:'Library'
        
    })
})



return loginRouter;

}
module.exports=router;