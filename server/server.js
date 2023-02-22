const express = require( "express");
const {ApolloServer} = require("apollo-server-express");
const cors = require("cors");
const {resolvers, typeDefs} = require("./schemas/index")
const connection = require("./connection/connection");
const jwt = require("jsonwebtoken");
const routes = require("./routes/index");
const { authMiddleware } = require("./utils/auth");
const app = express();
const server = new ApolloServer({resolvers, typeDefs, context: authMiddleware})
require("dotenv").config()

app.use(routes);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;




    const startApolloServer = async(typeDefs, resolvers) => {
        await server.start()
        server.applyMiddleware({
            app
        })
        connection.once("open", () => {
            app.listen(PORT, () => {
                console.log("Server is running on port " + PORT)
                console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
            })

        })



}
startApolloServer(typeDefs, resolvers)





// TOKENS

// function auth(req, res, next){

//     const authHeader = req.headers["authorization"]
//     const token = authHeader && authHeader.split(' ')[1]

//     if(token == null) return res.sendStatus(401)


//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
    


// }






// const posts = [

//     {
//         username: "Kay",
//         title: "Post 1"
//     },
//     {
//         username: "jeff",
//         title: "Post 2"
//     }


// ]





// app.post("/login", (req, res) => {

//     const username = req.body.username
//     const user = { name: username }
//     console.log(process.env.ACCESS_TOKEN_SECRET)

//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//     res.json({ accessToken: accessToken })



// })



// app.get ('/posts',auth, (req, res) => {
//     res.json(posts.filter(post => post.username === req.user.name))
// })