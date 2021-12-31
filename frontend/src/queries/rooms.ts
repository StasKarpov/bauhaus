import gql from "graphql-tag";

export const ROOMS = gql`
  query Rooms {
    rooms {
      data {
        id
        attributes {
          Name
          CardColorCss
          TimetableColorCss
          Photos {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const ROOM = gql`
  query Room($roomId: ID) {
    room(id: $roomId) {
      data {
        id
        attributes {
          Name
          CardColorCss
          TimetableColorCss
          Photos {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
