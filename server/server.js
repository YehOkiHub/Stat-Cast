const express = require( "express");
const {ApolloServer} = require("apollo-server-express");
const cors = require("cors");
const {resolvers, typeDefs} = require("./schemas/index")
const connection = require("./connection/connection");

const routes = require("./routes/index")
const app = express();
const server = new ApolloServer({resolvers, typeDefs})

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