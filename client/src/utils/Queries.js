import { gql } from "@apollo/client";




export const GET_TEAM = gql`
query teams {
    teams{
        name
        rating
    }
}


`
export const GET_PLAYER = gql`
query players {
    players{
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


`

export const GET_ME = gql`
query me {
    me{
        username
        password
        favplayer
        favteam
    }
}


`
