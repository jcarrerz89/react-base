import {IRoomType} from "./IRoomType";

export interface IAnnouncementType {
    id?: number,
    state?: string;
    availableAt: Date;
    description?: string;
    roomId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    room: IRoomType
}