import { ObjectId } from "mongodb";

export default interface Issue {
    _id: ObjectId;
    title: string;
    date: Date;
    description: string;
    fileUrl: string;
    visibility?: boolean;
}