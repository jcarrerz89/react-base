import {gql} from "@apollo/client";

export const SAVE_ANNOUNCEMENT = gql(`
    mutation saveAnnouncement($announcement: AnnouncementInputType!) {
        saveAnnouncement(announcement: $announcement) {
            id,
            state,
            availableAt,
            description,
            createdAt,
            updatedAt
        }
    } 
`);

export const GET_LATEST_ANNOUNCEMENTS = gql(`
    query getLatestAnnouncements($take: Float!) {
        getLatestAnnouncements(take: $take) {
            id,
            description,
            availableAt,
            room {
                id, 
                description,
                m2, 
                maxOccupants
            }
        }
    }
`);