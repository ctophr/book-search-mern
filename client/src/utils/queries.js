import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      bookCount
      email
      savedBooks {
        description
        authors
        bookId
        image
        link
        title
      }
      username
      _id
    }
  }
`;
