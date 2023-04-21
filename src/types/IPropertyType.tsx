import {IRoomType} from "./IRoomType";

export interface IPropertyType {
    id: number;
    alias: string;
    country: string;
    district: string;
    city: string;
    suburb: string;
    street: string;
    number: number;
    flat: string;
    coverPicture: string;
    pictures: string[];
    rooms: IRoomType[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}