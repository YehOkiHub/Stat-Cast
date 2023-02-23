import React from "react";
import Nav from "./Nav";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TEAM, FAV_TEAMS_OF_USER } from "../utils/Queries";
import { SAVE_FAV_TEAM, REMOVE_FAV_TEAM } from "../utils/Mutation";
import Auth from "./../utils/auth";

const FavouriteTeam = () => {
  let user = Auth.getProfile();
  let allTeams = [];
  let selectedTeam = null;
  let favTeams = [];

  // Queries
  const teams = useQuery(GET_TEAM);
  const userQuery = useQuery(FAV_TEAMS_OF_USER, {
    variables: { userId: user.data._id },
  });

  if (teams.loading === false) {
    allTeams = teams.data.teams;
  }

  if (userQuery.loading === false) {
    favTeams = userQuery.data.favTeamsOfUser;
    favTeams = JSON.parse(favTeams);
  }

  //Mutations

  const [saveFavTeam, favTeamM] = useMutation(SAVE_FAV_TEAM);
  const [deleteFavTeam, delfavTeamM] = useMutation(REMOVE_FAV_TEAM);

  // Methods

  function handleTeamChange(event) {
    let target = event.target;
    let teamName = target.value;
    selectedTeam = teamName;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let response = await saveFavTeam({
      variables: { userId: user.data._id, name: selectedTeam },
    });

    window.location.reload();
  }

  async function handleDelete(event) {
    event.preventDefault();

    let target = event.target;
    let name = target.dataset.name;

    let response = await deleteFavTeam({
      variables: {
        userId: user.data._id,
        name: name,
      },
    });

    window.location.reload();
  }

  return (
    <>
      <Nav />
      <div className="wrapper">
        <div className="fav-team-select">
          <h2 className="heading">Select Your Favourite Team</h2>
          <form onSubmit={handleSubmit}>
            <div className="group">
              <select onChange={handleTeamChange}>
                <option value="-1">-- Select Team --</option>
                {allTeams.map((team) => {
                  return <option value={team.name}>{team.name}</option>;
                })}
              </select>
            </div>
            <div className="group">
              <button className="button">Submit</button>
            </div>
          </form>
          <div />
        </div>
        <div className="margin-top-5">
          <h2 className="heading">Your Favourite Team</h2>

          <table>
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {favTeams.map((ft) => {
                return (
                  <tr>
                    <td>{ft}</td>
                    <td>
                      <button
                        data-name={ft}
                        onClick={handleDelete}
                        className="button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FavouriteTeam;
