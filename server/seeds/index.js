const conn = require("./../connection/connection");
const { Player, Team } = require("./../models");

async function run() {
  const teams = [
    {
      name: "Arizona Cardinals",
      rating: 70,
    },
    {
      name: "Atlanta Falcons",
      rating: 78,
    },
    {
      name: "Carolina Panthers",
      rating: 76,
    },
    {
      name: "Chicago Bears",
      rating: 68,
    },
    {
      name: "Dallas Cowboys",
      rating: 90,
    },
    {
      name: "Detroit Lions",
      rating: 86,
    },
    {
      name: "Green Bay Packers",
      rating: 85,
    },
    {
      name: "Los Angeles Rams",
      rating: 73,
    },
    {
      name: "Minnesota Vikings",
      rating: 91,
    },
    {
      name: "New Orleans Saints",
      rating: 78,
    },
    {
      name: "New York Giants",
      rating: 83,
    },
    {
      name: "Philadelphia Eagles",
      rating: 98,
    },
    {
      name: "San Francisco 49ers",
      rating: 95,
    },
    {
      name: "Seattle Seahawks",
      rating: 86,
    },
    {
      name: "Tampa Bay Buccaneers",
      rating: 85,
    },
    {
      name: "Washington Commanders",
      rating: 85,
    },
    {
      name: "Baltimore Ravens",
      rating: 92,
    },
    {
      name: "Buffalo Bills",
      rating: 96,
    },
    {
      name: "Cincinnati Bengals",
      rating: 95,
    },
    {
      name: "Cleveland Browns",
      rating: 84,
    },
    {
      name: "Denver Broncos",
      rating: 74,
    },
    {
      name: "Houston Texans",
      rating: 66,
    },
    {
      name: "Indianapolis Colts",
      rating: 70,
    },
    {
      name: "Jacksonville Jaguars",
      rating: 87,
    },
    {
      name: "Kansas City Chiefs",
      rating: 99,
    },
    {
      name: "Las Vegas Raiders",
      rating: 76,
    },
    {
      name: "Los Angeles Chargers",
      rating: 87,
    },
    {
      name: "Miami Dolphins",
      rating: 86,
    },
    {
      name: "New England Patriots",
      rating: 85,
    },
    {
      name: "New York Jets",
      rating: 84,
    },
    {
      name: "Pittsburgh Steelers",
      rating: 87,
    },
    {
      name: "Tennessee Titans",
      rating: 83,
    },
  ]

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
