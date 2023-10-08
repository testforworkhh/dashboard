import {gql} from "@apollo/client";

export const FETCH_DASHBOARD = gql`
query {
  dashboard {
    dialogs {
      active 
      inactive
      completed
    }
    lists {
      active 
      inactive
      completed
    }
    scenarios {
      active 
      inactive
      completed
    }
  }
}
`;