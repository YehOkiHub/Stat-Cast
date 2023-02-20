const {gql} = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID    
    username: String!
    email: String!
    password: String!
}
type Query {
    users: [User]
    
   

}
type Mutation {
    addUser(email: String, password: String, username: String): User
    auth(password: String, username: String): User
}



`

module.exports = typeDefs