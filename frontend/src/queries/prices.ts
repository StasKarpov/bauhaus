import gql from "graphql-tag";

export const PRICES_QUERY = gql`
  query Prices($priceTypeId: ID) {
    prices(filters: { price_type: { id: { eq: $priceTypeId } } }) {
      data {
        id
        attributes {
          Name
          Price
          Description
        }
      }
    }
  }
`;

export const PRICES_TYPES_QUERY = gql`
  query PricesTypes {
    priceTypes {
      data {
        id
        attributes {
          Name
          Image {
            data {
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
