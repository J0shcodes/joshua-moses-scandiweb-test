import { gql } from "@apollo/client";

export const LOAD_ALL_CATEGORIES = gql`
  query {
    category(input: {
      title: "all"
    }) {
      name
      products {
        id
        name
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const LOAD_CLOTHES_CATEGORY = gql`
  query {
    category(input: {
      title: "clothes"
    }) {
      name
      products {
        id
        name
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const LOAD_TECH_CATEGORY = gql`
  query {
    category(input: {
      title: "tech"
    }) {
      name
      products {
        id
        name
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;
