import { Photo } from "./photo";

export interface Member {
    id: string;
    username: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    introduction: string;
    city: string;
    country: string;
    photos: Photo[];
}