import { gql } from "@apollo/client";

export const GET_TEAM = gql`
  query teams {
    teams {
      name
      rating
    }
  }
`;
export const GET_PLAYER = gql`
  query players {
    players {
      name
      age
      position
      rating
      team
      teamId
      passing
      receiving
      rushing
      fumbles
      tackles
      interceptions
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
      username
      password
      favplayer
      favteam
    }
  }
`;
export const GET_TOPPLAYER = gql`
  query topplayers {
    topplayers {
      name
      age
      position
      rating
      passing
      receiving
      rushing
      fumbles
      tackles
      interceptions
    }
  }
`;
export const GET_TOPTEAM = gql`
  query topteams {
    topteams {
      name
      rating
    }
  }
`;
export const GET_PRODUCTS = gql`
  query products {
    products {
      _id
      name
      price
      autograph
      description
      img
    }
  }
`;

export const FAV_TEAMS_OF_USER = gql`
  query favTeamsOfUser($userId: ID) {
    favTeamsOfUser(userId: $userId)
  }
`;
