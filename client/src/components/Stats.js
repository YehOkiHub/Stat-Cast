import React from "react";
import Nav from "./Nav";
import { useQuery } from "@apollo/client";
import { GET_PLAYER} from "./../utils/Queries";

function Stats() {
  let players = useQuery(GET_PLAYER);
  let playersData = [];
  if (players.loading == false) {
    playersData = players.data.players;
  } console.log(playersData)
  return (
    <div>
      <Nav />
      <div className="pageName">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Position</th>  
              <th>Team</th>            
              <th>Age</th>
              <th>Passing</th>
              <th>Receiving</th>
              <th>Rushing</th>
              <th>Fumbles</th>
              <th>Tackles</th>
              <th>Interceptions</th>
              
            </tr>
          </thead>
          <tbody>
            {playersData.map((player) => {
              return (
                <tr key={player._id}>
                  <td>{player.name}</td>
                  <td>{player.rating}</td>
                  <td>{player.position}</td>
                  <td>{player.team}</td>
                  <td>{player.age}</td>
                  <td>{player.passing}</td>
                  <td>{player.receiving}</td>
                  <td>{player.rushing}</td>
                  <td>{player.fumbles}</td>
                  <td>{player.tackles}</td>
                  <td>{player.interceptions}</td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stats;
