import express,{response} from 'express'

const app=express()

//task: create app and deploy on heroku and create html page with two buttons 1 to sending post and 2 create button to get all posts

app.use(express.text()) //to receive data from body

//GET/POST/PUT/DELEte  are basic functions
//to test the express nodejs server u need to use tool i.e. postman
// postman is needed to test post requests of server
//local variables in server are logically illegal to write
var posts=["some post1","some post2","some post3"];




//routes1
app.get('/',(req, res)=>{
    res.send('i am express.js loc.CRUD server powered by Heroku continous integration')
})


//routes1
app.get('/post/:id',(req, res)=>{
    const id = Number(req.params.id)
     res.send(posts[id]);
 })
//routes2
//req has every information in req object, res is a bunch of function thru which u can respond back your sender 
app.get('/posts',(req, res)=>{ 
    res.send(posts);
})


//routes3
app.post('/post',(req, res)=>{ //req has every information in req object, res is a bunch of function thru which u can respond back your sender 
    
    posts.push(req.body);
    res.send(`Your Post Is saved👍now we have ${posts.length}`);

})

//routes4
app.put('/post/:id',(req, res)=>{ //req has every information in req object, res is a bunch of function thru which u can respond back your sender 
    const id=req.params.id;
    const in_value=req.body;
    posts[id]=in_value;
    res.send(`Your Post value is now updated 🤞`);

})

//routes5
app.delete('/post/:id',(req, res)=>{ //req has every information in req object, res is a bunch of function thru which u can respond back your sender 
    const id=Number(req.params.id);
    
    delete posts[id];
    res.send(`Your Post Is saved👍now we have ${posts.length}`);

})



//Port is of TCP
// const PORT=process.env.PORT; 
const PORT=process.env.PORT || 3000; //run on env port or on 3000
app.listen(PORT,()=>{
    console.log(`Hello server is listening at port ${PORT}`)
}) 
