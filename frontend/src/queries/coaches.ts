import gql from "graphql-tag";

export const COACHES = gql`
  query Coaches {
    coaches {
      data {
        id
        attributes {
          Name
          FamilyName
          Image {
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
    trainings {
      data {
        id
        attributes {
          Title
          coach {
            data {
              id
            }
          }
          room {
            data {
              attributes {
                TimetableColorCss
              }
            }
          }
        }
      }
    }
  }
`;

export const COACH_AND_TRAININGS = gql`
  query Coach($coachId: ID) {
    coach(id: $coachId) {
      data {
        id
        attributes {
          Name
          NameInstrumental
          FamilyName
          Description
          BottomText
          Image {
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
    trainings(filters: { coach: { id: { eq: $coachId } } }) {
      data {
        id
        attributes {
          Title
          training_types {
            data {
              id
              attributes {
                Name
              }
            }
          }
          days {
            data {
              id
              attributes {
                Name
                ShortName
              }
            }
          }
          Length
          room {
            data {
              id
              attributes {
                Name
                CardColorCss
                TimetableColorCss
              }
            }
          }
        }
      }
    }
  }
`;
