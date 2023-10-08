import {gql} from "@apollo/client";

export const LOGIN_QUERY = gql`
     mutation login ($username: String!, $password: String!) {
        login(username: $username, password: $password) {
        token
    }
  }
`;