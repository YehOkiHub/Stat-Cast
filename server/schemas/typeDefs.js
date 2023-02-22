const {gql} = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID    
    username: String!
    email: String!
    password: String!
    favplayer: String
    favteam: String
}
type Team {
    _id: ID    
    name: String!
    rating: Int!   

}
type Stats {
    _id: ID    
    name: String!
    age: Int! 
    teamId: ID
    rating: Int!
    position: String!
    team: String

}
type Player {
    _id: ID    
    name: String!
    age: Int! 
    teamId: ID
    team: String!
    rating: Int!
    position: String!
    passing: Int!
    receiving: Int!
    rushing: Int!
    fumbles: Int!
    tackles: Int!
    interceptions: Int!


}
type Query {
    users: [User]
    teams: [Team]
    players: [Player]
    me: User
    
   

}
type Mutation {
    addUser(email: String, password: String, username: String): User
    auth(password: String, username: String): Auth
}

type Auth {
    token: String
    user: User


}


`

module.exports = typeDefs