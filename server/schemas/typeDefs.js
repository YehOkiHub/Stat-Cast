const { gql } = require("apollo-server-express");

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
    team: String
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
    topplayers: [Player]
    topteams: [Team]
    products: [Product]
    favTeamsOfUser(userId: ID): String
  }
  type Mutation {
    addUser(email: String, password: String, username: String): User
    auth(password: String, username: String): Auth
    checkout(price: Int): String
    saveFavTeam(userId: ID, name: String): String
    deleteFavTeam(name: String, userId: ID): String
  }

  type Auth {
    token: String
    user: User
  }

  type Product {
    _id: ID
    name: String!
    price: Int!
    autograph: String!
    description: String!
    img: String
  }
  type Stripe {
    price: Int!
  }
`;

module.exports = typeDefs;
