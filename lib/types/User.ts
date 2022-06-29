import { ObjectId } from "mongodb";

export default interface User {
  _id: ObjectId;
  email: string;
  first_name: string;
  last_name: string;
  pronouns: string;
  role: string;
  locked?: boolean;
  image?: string;
}
