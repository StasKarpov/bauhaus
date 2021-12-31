import gql from "graphql-tag";

export const CREATE_CONTACT = gql`
  mutation AddContact(
    $name: String
    $lastName: String
    $email: String
    $number: String
    $message: String
  ) {
    createContact(
      data: {
        Name: $name
        LastName: $lastName
        Email: $email
        Number: $number
        Message: $message
      }
    ) {
      data {
        id
      }
    }
  }
`;
