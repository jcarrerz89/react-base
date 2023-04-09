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