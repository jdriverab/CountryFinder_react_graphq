import { DocumentNode, gql } from "@apollo/client";

export const LIST_COUNTRIES_PER_LENGUAGE:DocumentNode = gql`
query Countries {
    countries {
      name
      code
      
    }
  }
`;

export const LIST_COUNTRIES_PER_CONTINENT:DocumentNode = gql`
{
    countries {
        name
        code
        continent
    }
}
`;


