import React from "react";
import Nav from "./Nav";
import { useQuery } from "@apollo/client";
import { GET_TOPPLAYER, GET_TOPTEAM } from "./../utils/Queries";

let imgs = [
  "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/tom-brady-patriots-falcons-super-bowl-ap-photo-1645650913.jpg?crop=1.00xw:1.00xh;0,0&resize=900:*",
  "https://media.cnn.com/api/v1/images/stellar/prod/220114122205-20220114-sports-buffalo-bills-josh-allen.jpg?c=16x9&q=h_720,w_1280,c_fill",
];

function Home() {
  let topPlayers = [];
  const players = useQuery(GET_TOPPLAYER);
  if (players.loading == false) {
    topPlayers = players.data.topplayers;
    topPlayers = topPlayers.slice(0, 10);
  }
  let topTeams = [];
  const teams = useQuery(GET_TOPTEAM);
  if (teams.loading == false) {
    topTeams = teams.data.topteams;
    topTeams = topTeams.slice(0, 10);
  }
  return (
    <div>
      <Nav />

      <div className="homebody">
        <div className="wrapper">
          <div className="topplayers">
            <div className="grids grids-2">
              <div className="grid">
                <h1>Top players</h1>
                <br />
                {topPlayers.map((player) => {
                  return (
                    <p>
                      {player.name}, {player.position}, Rating:{player.rating}
                      <br />
                    </p>
                  );
                })}
              </div>
              <div className="grid">
                <img src={imgs[0]} />
              </div>
            </div>
          </div>
          <div>
            <div className="topteams">
              <div className="grids grids-2">
                <div className="grid">
                  <img src={imgs[1]} />
                </div>
                <div className="grid">
                  <h1>Top Teams</h1>

                  <p>
                    {topTeams.map((team) => {
                      return (
                        <p>
                          {team.name}, Rating: {team.rating}
                          <br />
                        </p>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
