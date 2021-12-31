import gql from "graphql-tag";

export const TRAININGS = gql`
  query Trainings {
    trainings {
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
          room {
            data {
              id
              attributes {
                CardColorCss
              }
            }
          }
        }
      }
    }
    trainingTypes {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`;

export const TRAINING = gql`
  query Training($trainingId: ID) {
    training(id: $trainingId) {
      data {
        id
        attributes {
          Title
          Subtitle
          training_types {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Description
          BottomText
          Media {
            data {
              id
              attributes {
                url
              }
            }
          }
          room {
            data {
              id
              attributes {
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

export const ALL_TRAININGS_AND_DAYS_QUERY = gql`
  query Trainings {
    trainings {
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
          Time
          room {
            data {
              id
              attributes {
                CardColorCss
                TimetableColorCss
              }
            }
          }
          coach {
            data {
              id
              attributes {
                Name
                FamilyName
              }
            }
          }
          days {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
    days {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`;

export const TIMETABLE_FILTERS_DATA_QUERY = gql`
  query {
    trainings {
      data {
        id
        attributes {
          Title
        }
      }
    }
    coaches {
      data {
        id
        attributes {
          Name
          FamilyName
        }
      }
    }
    trainingTypes {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`;
