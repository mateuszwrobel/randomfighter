import { gql } from 'apollo-angular';

export const GET_STARHIPS_QUERY = gql`
  {
    getAllStarships {
      id
      MGLT
      cargo_capacity
      consumables
      cost_in_credits
      crew
      hyperdrive_rating
      length
      manufacturer
      max_atmosphering_speed
      model
      name
      passengers
      films
      pilots
      starship_class
      url
      createdAt
      updatedAt
    }
  }
`;
