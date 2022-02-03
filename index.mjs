import express from 'express'

const app = express()
//the app variable is basically the server which runs on heroku or local


//task: create app and deploy on heroku and create html page with two buttons 1 to sending post and 2 create button to get all posts

app.use(express.json()) //to receive data from body
//GET/POST/PUT/DELEte  are basic functions
//to test the express nodejs server u need to use tool i.e. postman
// postman is needed to test post requests of server
//local variables in server are logically illegal to write

//routes1
app.get('/', (req, res) => {
    res.send('i am express.js server @ powered by Heroku Continous Integration')
})


var posts = ["some post1", "some post2", "some post3"]

//routes1
app.get('/post/:id', (req, res) => {

    const id = Number(req.params.id);

    res.send(posts[id]);
})


//routes2
app.get('/water', (req, res) => { //req has every information in req object, res is a bunch of function thru which u can respond back your sender 
    res.send('Here is your water')
})

//routes3
app.get('/food', (req, res) => {
    res.send('here is your food ')
})

//Port is of TCP
// const PORT=process.env.PORT; 
const PORT = process.env.PORT || 3000; //run on env port or on 3000
app.listen(PORT, () => {
    console.log(`Hello server is listening at port ${PORT}`)
}) 
