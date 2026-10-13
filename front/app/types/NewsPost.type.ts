export type NewsPost = {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string
  }
  acf: {
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