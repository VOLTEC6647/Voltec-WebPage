import { ObjectId } from "mongodb";

export default interface Issue {
  id: number;
  title: {
    rendered: string;
  };
  date: Date;
  type: string;
  slug: string;
  link: string;
  author: number;
  acm_fields: {
    description: string;
    document: {
      alt_text: string;
      caption: {
        rendered: string;
      };
      media_details: {
        filesize: number;
        sizes: {};
      };
      media_type: string;
      source_url: string;
      title: string;
    };
  };
}
