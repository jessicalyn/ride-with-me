import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_RIDE = gql`
  mutation {
    createRide(driverId:1 startCityId:1 endCityId:2 description:"Going for a ride" mileage:100 price:50.00 totalSeats:4 departureTime:"2019-05-23") {
        id
        driverId
        startCityId
        endCityId
        description
        mileage
        price
        totalSeats
        departureTime
        createdAt
        updatedAt
    }
  }
`;

const CreateRide = () => {
  let input;

  return (
    <Mutation mutation={CREATE_RIDE}>
      {(createRide, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createRide({ variables: { type: input.value } });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};














// import React from 'react';
// import { Query } from "react-apollo";
// import { gql } from "apollo-boost";
// import { storeCities } from '../actions';

// export const ApolloCities = () => (
//   <Query
//     query={gql`
//       {
//         allCities {
//           name
//           state
//         }
//       }
//     `}
//   >
//     {({ loading, error, data }) => {
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;

//       return storeCities(data.allCities)
//       // data.allCities.map(({ name, state }) => (
//       //   <div key={name}>
//       //     <p>{name}: {state}</p>
//       //   </div>
//       // ));
//     }}
//   </Query>
// );