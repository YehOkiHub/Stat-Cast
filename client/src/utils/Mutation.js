import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(    
    $email: String
    $password: String
    $username: String
  ) {
    addUser(      
      email: $email
      password: $password
      username: $username
    ) {      
      email
      password
      username
    }
  }
`;

export const AUTH = gql`
  mutation auth(    
   
    $password: String
    $username: String
  ) {
    auth(      
     
      password: $password
      username: $username
    ) {     
      
      username
    }
  }
`;
