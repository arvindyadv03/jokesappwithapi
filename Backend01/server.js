import  express  from "express";

const app = express ()

app.get('/api/api-jokes', (req, res)=>{
    const jokes = [
        
        {
            id : 1,
            title : "a wonder how"
        },
        {
            id : 2,
            title : "What did one hat say to the other? Stay here , I'm going on ahead!"
        },
        {
            id : 3,
            title : "Why did the bicycle fall over? Because it was two-tiredy"
        },
        {
            id : 4,
            title : "What did one ocean say to the other ocean? Nothing, they just waved"
        },
        {
            id : 5,
            title : "Jokes apart or Jokes are a part"
        }
    ]

    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`servert at http://localhost:${port}`)
})