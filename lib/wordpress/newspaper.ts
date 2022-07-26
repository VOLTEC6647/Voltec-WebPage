const BASE_URL = "http://voltec.local/wp-json/wp/v2";

export const fetchNewspaperIssues = async () => {
  const req = await fetch(BASE_URL + "/newspapers?_embed");
  const posts = await req.json();
  return posts;
};


export const fetchNewspaperIssue = async (id: number) => {
    const req = await fetch(BASE_URL + "/newspapers/" + id + "?_embed");
    const post = await req.json();
    return post;
}