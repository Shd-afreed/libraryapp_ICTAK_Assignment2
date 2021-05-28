const express=require("express")

const addAuthorsRouter=express.Router();

function router(nav1,nav2){

    addAuthorsRouter.get('/',function(req,res){
   
        res.render("addAuthors",{
            nav1,
            nav2, 
            title:'Library'
            
        })
    })
    addAuthorsRouter.get('/add',function(req,res){
        res.send("Author is added")
    })

    // authorsRouter.get('/add',function(req,res){
    //  authors.push({
    //     name:request.query.name,
    //     works:request.query.works,
    //     published:request.query.published,
    //     img:request.query.img
    //   });
    //   res.redirect('/books')
    
    // });

return addAuthorsRouter;
}
module.exports=router;