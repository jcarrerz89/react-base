import {gql} from "@apollo/client";


export const UPDATE_PROFILE = gql(`
    mutation editProfile($request: ProfileInputRequest!) {
        updateProfile(request: $request) {
            name, 
            surname,
            date_of_birth,
            nationality,
            description,
            image
        }
    }
`);