export interface IProfileType {
    id: number,
    name?: string;
    surname?: string;
    nationality?: string;
    dateOfBirth?: string;
    phoneNumber?: string;
    website?: string;
    occupation?: string;
    description?: string;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
