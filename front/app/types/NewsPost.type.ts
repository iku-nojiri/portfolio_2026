export type NewsPost = {
  id: number;
  slug: string;
  category: string;
  date: string;
  acf: {
    title: string;
    text_01: string;
    text_02: string;
    text_03: string;
    img: string;
  },
  _embedded: {
    "wp:term": {
      name: string;
    }[][];
  };
};