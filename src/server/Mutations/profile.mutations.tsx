import {gql} from "@apollo/client";


export const UPDATE_PROFILE = gql(`
    mutation editProfile($request: ProfileInputRequest!) {
        updateProfile(request: $request) {
            name, 
            surname,
            dateOfBirth,
            nationality,
            description,
            image
        }
    }
`);