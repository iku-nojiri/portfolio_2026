export type BlogPost = {
  id: number;
  date: string;
  title: {
    rendered: string
  }
  acf: {
    lead: string;
    url: string
  },
  _embedded: {
    "wp:term": {
      name: string;
    }[][];
  };
};