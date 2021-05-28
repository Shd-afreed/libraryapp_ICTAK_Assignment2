const { request } = require("express");
const express=require("express")

const authorsRouter=express.Router();

function router(nav1,nav2){
 
    var authors=[
        {
            
            name:'Enid Blyton',
            works:'The famous five',
            published:'1942',
            img:'Enid_Blyton.jpg'
        },
        {
            
            name:'Rabindranath Tagore',
            works:'Gitanjali',
            published:'	1910',
            img:'tagore.jpg'
        },
        {
            name:'Anne Frank',
            works:' The Diary of a Young Girl ',
            published:'1952',
            img:'Anne_Frank.jpg'
        },
        {
            name:'Helen Keller',
            works:'Light in My Darkness',
            published:'1927',
            img:'hellen.jpg'
        },
        {
            name:'O. V. Vijayan',
            works:'Khasakkinte Itihasam',
            published:'1990',
            img:'vijayan.jpg'
        }
    
    
    ]
    authorsRouter.get('/',function(req,res){
         
        res.render("authors",{
            nav1,
            nav2,
            title:'Library',
            authors
        })
    })
    

    
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('author',{
            nav1,
            nav2,
            title:'Library',
            author:authors[id]
        })
    })

    

    return authorsRouter;
}


module.exports=router;