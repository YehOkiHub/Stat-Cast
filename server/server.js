const express = require( "express");
const {ApolloServer} = require("apollo-server-express");
const cors = require("cors");
const {resolvers, typeDefs} = require("./schemas/index")
const connection = require("./connection/connection");
const jwt = require("jsonwebtoken");
const routes = require("./routes/index")
const app = express();
const server = new ApolloServer({resolvers, typeDefs})
require("dotenv").config()

app.use(routes);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;




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



app.post("/login", (req, res) => {

    const username = req.body.username
    const user = { name: username }
    console.log(process.env.ACCESS_TOKEN_SECRET)

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })



})