import TagType from "./TagType";

export default interface BlogPost {
  tags: TagType[];
  id: number;
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
        source_url: string;
      }
    ];
  };
  excerpt: {
    rendered: string;
  };
}
