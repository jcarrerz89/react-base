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
    query getLatestAnnouncements($limit: Float!) {
        getLatestAnnouncements(limit: $limit) {
            id
        }
    }
`);