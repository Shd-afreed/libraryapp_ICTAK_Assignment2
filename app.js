const express=require("express")
const app=new express();
const port=process.env.PORT || 8000;
const nav1=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addBooks',name:'Add Books'
    },
    {
        link:'/addAuthors',name:'Add Authors'
    }
]

const nav2=[
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
    }
]
    
const booksRouter=require('./src/routes/bookRoutes')(nav1,nav2);
const authorsRouter=require('./src/routes/authorRoutes')(nav1,nav2);
const loginRouter=require('./src/routes/loginRoutes')(nav1,nav2);
const signupRouter=require('./src/routes/signupRoutes')(nav1,nav2);
const addBooksRouter=require('./src/routes/addBookRoutes')(nav1,nav2);
const addAuthorsRouter=require('./src/routes/addAuthorRoutes')(nav1,nav2);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views')
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addBooks',addBooksRouter);
app.use('/addAuthors',addAuthorsRouter);

app.get('/',function(req,res){
     
    res.render("index",{
        nav1,
        nav2,
        title:'Library'
    });
});

app.listen(port,()=>{console.log("Server ready at "+port)});