export interface IRoomType {
    id: number;
    alias: string;
    m2: number;
    maxOccupants: number;
    description: string;
    coverPicture: string;
    pictures: string[];
    propertyId: number;
}