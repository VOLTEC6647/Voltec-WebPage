import { ObjectID } from "bson";

export default interface BlogPost {
    _id: ObjectID;
    title: string;
    content: string;
    likes: number;
    image: string;
    badges: string[];
    date: string;
}