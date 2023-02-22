import React from "react";
import Nav from "./Nav";
import { useQuery } from "@apollo/client";
import { GET_TEAM } from "./../utils/Queries";

function Teams() {
  let teams = useQuery(GET_TEAM);
  let teamsData = [];
  if (teams.loading == false) {
    teamsData = teams.data.teams;
  }
  return (
    <div>
      <Nav />
      <div className="pageName">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {teamsData.map((team) => {
              return (
                <tr>
                  <td>{team.name}</td>
                  <td>{team.rating}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
