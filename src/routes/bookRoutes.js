const express=require("express")

const booksRouter=express.Router();

function router(nav1,nav2){
 
    var books=[
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'tom.jpg'
        },
        {
            title:'Balyakalasakhi',
            author:'Basheer',
            genre:' Romance novel',
            img:'Balyakalasakhi.jpg'
        },
        {
            title:'The Adventures of Huckleberry Finn',
            author:'Mark Twain',
            genre:'Satire',
            img:'adventures-of-huckleberry-finn.jpg'
        },
        {
            title:'Harry Potter',
            author:'J. K. Rowling',
            genre:'Fantasy',
            img:'harrypotter.jpg'
        },
        {
            title:'Wings of Fire',
            author:'A. P. J. Abdul Kalam ',
            genre:'Autobiography',
            img:'wings.jpg'
        }
    
    
    ]
    booksRouter.get('/',function(req,res){
         
        res.render("books",{
            nav1,
            nav2,
            title:'Library',
            books
        })
    })
    

    
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('book',{
            nav1,
            nav2,
            title:'Library',
            book:books[id]
        })
    })

    return booksRouter;
}


module.exports=router;