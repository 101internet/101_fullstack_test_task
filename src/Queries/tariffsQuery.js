import { gql } from "graphql-tag";

export const TARIFFS_QUERY = gql`
  query Tariffs($filter: String, $limit: Int, $offset: Int, $sort: String) {
    tariffs(
      filter: $filter
      limit: $limit
      offset: $offset
      sort: $sort
      optimize: true
    ) {
      data {
        id
        name
        displayPrice
        provider {
          id
        }
        internet {
          speed_in
        }
        tv {
          channels
          channels_hd
        }
      }
    }
  }
`;
