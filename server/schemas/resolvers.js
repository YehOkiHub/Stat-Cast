const { User, Team, Player } = require("./../models/index");
const {signToken} = require("./../utils/auth")
const { AuthenticationError } = require("apollo-server-express");


const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    teams: async () => {
      return await Team.find();
    },
    players: async () => {
      let players = await Player.find();
      let teams = await Team.find();

      let finalPlayers = [];
      players.forEach((player, playerIndex) => {
        finalPlayers.push(player);
        teams.forEach((team) => {
          if (team._id.toString() == player.teamId.toString()) {           
            finalPlayers[playerIndex]["team"] = team.name;
            console.log(finalPlayers[playerIndex], "TEST", team);
          }
        });
      });

      return finalPlayers;
    return players
    },
    me: async (parent, args, context) => {
        console.log(context)
        return await User.find({
            _id:context.user._id
        })
        
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      return await User.create(args);
    },
    auth: async (parent, args) => {
      let user = await User.findOne({
        username: args.username,
        password: args.password,
      });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return {token, user};
    },
  },
};

module.exports = resolvers;
