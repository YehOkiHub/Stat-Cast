const conn = require("./../connection/connection");
const { Player, Team } = require("./../models");

async function run() {
  const teams = [
    {
      name: "Kansas City Chiefs",
      rating: 95,
    },
    {
      name: "New England Patriots",
      rating: 85,
    },
    {
      name: "Green Bay Packers",
      rating: 87,
    },
    {
        name: "New York Giants",
        rating: 80,
      }
  ];
  const players = [
    {
      name: "Patrick Mahomes",
      age: 27,
      position: "Quarterback",
      team: "Kansas City Chiefs",
      rating: 99,
      passing: 210,
      receiving: 5,
      rushing: 25,
      fumbles: 10,
      tackles: 0,
      interceptions: 10
    },

    {
      name: "Tom Brady",
      age: 44,
      position: "Quarterback",
      team: "New England Patriots",
      rating: 99,
      passing: 180,
      receiving: 4,
      rushing: 10,
      fumbles: 115,
      tackles: 0,
      interceptions: 5
    },

    {
      name: "Aaron Rodgers",
      age: 28,
      position: "Quarterback",
      team: "Green Bay Packers",
      rating: 98,
      passing: 220,
      receiving: 3,
      rushing: 24,
      fumbles: 11,
      tackles: 1,
      interceptions: 4
    },
  ];

await Team.deleteMany()
const teamResponse = await Team.insertMany(teams);
players[0].teamId = teamResponse[0]._id
players[1].teamId = teamResponse[1]._id
players[2].teamId = teamResponse[2]._id

console.log(players)


await Player.deleteMany()
const playerResponse = await Player.insertMany(players);
  
}


run();
