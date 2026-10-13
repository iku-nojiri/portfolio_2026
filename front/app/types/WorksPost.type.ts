export type WorksPost = {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string
  }
  acf: {
    category: string;
    img: string;
    overview: string;
    approach: string;
    period: string;
    role: string;
    url: string;
  },
  _embedded: {
    "wp:term": {
      name: string;
    }[][];
  };
};