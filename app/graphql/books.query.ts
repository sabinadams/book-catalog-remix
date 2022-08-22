import { gql } from "graphql-request";

export default gql`
  query GetBooks {
    allBook {
      title
      author
      description
    }
  }
`;
