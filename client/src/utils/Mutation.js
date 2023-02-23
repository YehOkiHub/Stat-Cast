import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($email: String, $password: String, $username: String) {
    addUser(email: $email, password: $password, username: $username) {
      email
      password
      username
    }
  }
`;

export const AUTH = gql`
  mutation auth($password: String, $username: String) {
    auth(password: $password, username: $username) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const GET_STRIPE = gql`
  mutation checkout($price: Int) {
    checkout(price: $price)
  }
`;

export const SAVE_FAV_TEAM = gql`
  mutation saveFavTeam($userId: ID, $name: String) {
    saveFavTeam(userId: $userId, name: $name)
  }
`;

export const REMOVE_FAV_TEAM = gql`
  mutation deleteFavTeam($userId: ID, $name: String) {
    deleteFavTeam(userId: $userId, name: $name)
  }
`;
