import { ObjectID } from "bson";

export default interface BlogPost {
  tags: any;
  _id: ObjectID;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  likes: number;
  image: string;
  badges: string[];
  date: string;
  private: boolean;
  _embedded: {
    "wp:featuredmedia": [
      {
        link: string;
      }
    ];
  };
}
