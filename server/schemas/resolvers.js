const { User, Team, Player, Product } = require("./../models/index");
const { signToken } = require("./../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const stripe = require("stripe")(
  "sk_test_51MekLjDdqJIWIfECBRNWOL8RFciZKDcNxwuISu2YELPhLGh28B5P8UJjcir5wAb00fFeZ6YOXiGE4vydSJhOlJHc00LsQvpoMh"
);

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
          if (
            team !== undefined &&
            team._id !== undefined &&
            player !== undefined &&
            player.teamId !== undefined
          ) {
            if (team._id.toString() == player.teamId.toString()) {
              finalPlayers[playerIndex]["team"] = team.name;
              console.log(finalPlayers[playerIndex], "TEST", team);
            }
          }
        });
      });

      return finalPlayers;
    },
    topplayers: async (parent, args, context) => {
      let players = await Player.find();
      players = players.sort((a, b) => (a.rating < b.rating ? 1 : -1));
      return players;
    },
    topteams: async (parent, args, context) => {
      let teams = await Team.find();
      teams = teams.sort((a, b) => (a.rating < b.rating ? 1 : -1));
      return teams;
    },
    me: async (parent, args, context) => {
      console.log(context);
      return await User.find({
        _id: context.user._id,
      });
    },

    products: async () => {
      return await Product.find();
    },
    favTeamsOfUser: async (parent, args) => {
      let user = await User.findOne({ _id: args.userId });
      return JSON.stringify(user.favteam);
    },
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
      return { token, user };
    },
    checkout: async (parent, args) => {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: args.price * 100,
              product_data: {
                name: "Product",
                description: "product",
              },
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000",
        cancel_url: "http://localhost:3000",
      });
      return session.url;
    },
    saveFavTeam: async (parent, args) => {
      await User.findOneAndUpdate(
        {
          _id: args.userId,
        },
        {
          $push: { favteam: args.name },
        }
      );

      return args.name;
    },
    deleteFavTeam: async (parent, args) => {
      await User.findOneAndUpdate(
        {
          _id: args.userId,
        },
        {
          $pull: { favteam: args.name },
        }
      );

      return "Team removed";
    },
  },
};

module.exports = resolvers;
