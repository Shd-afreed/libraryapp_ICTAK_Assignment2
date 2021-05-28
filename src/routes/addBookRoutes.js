
const express=require("express")

const addBooksRouter=express.Router();

function router(nav1,nav2){

    addBooksRouter.get('/',function(req,res){
   
        res.render("addBooks",{
            nav1,
            nav2, 
            title:'Library'
            
        })
    })

    addBooksRouter.get('/add',function(req,res){
        res.send("Book is added")
    })

return addBooksRouter;
}
module.exports=router;

