export type BlogPost = {
  id: number;
  date: string;
  acf: {
    title: string;
    lead: string;
    url: string
  },
  _embedded: {
    "wp:term": {
      name: string;
    }[][];
  };
};